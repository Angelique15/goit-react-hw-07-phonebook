import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsAPI = axios.create({
    baseURL: 'https://64949d310da866a953680ab8.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk('phonebook/fetchContacts', async () => {
    const { data } = await contactsAPI.get('/contacts');
    return data;
});

export const addContact = createAsyncThunk('phonebook/addContact', async (contact) => {
    const { data } = await contactsAPI.post('/contacts', contact);
    return data;
});

export const deleteContact = createAsyncThunk('phonebook/deleteContact', async (id) => {
    await contactsAPI.delete(`/contacts/${id}`);
    return id;
});


const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: [],
        filter: '',
        isLoading: false,
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;







