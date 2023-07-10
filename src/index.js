import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './redux/phonebookSlice';
import App from './components/App';
import './index.css';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




