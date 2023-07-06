import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Container, H1, H2 } from '../styles/AppStyles';
import { setFilter, fetchContacts, addContact, deleteContact } from '../redux/phonebookSlice';

const App = () => {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);
  const isLoading = useSelector((state) => state.phonebook.isLoading);
  const error = useSelector((state) => state.phonebook.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (contact) => {
    if (contacts.some((c) => c.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactFilter filter={filter} handleFilterChange={handleFilterChange} />
      <H2>Add new contact</H2>
      <ContactForm addContact={handleAddContact} />
      <H2>Contacts</H2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: could not save contact. {error.message}</p>
      ) : (
        <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
      )}
    </Container>
  );
};

export default App;





