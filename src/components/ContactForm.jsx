import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../styles/FormStyles';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert('Please enter name and phone');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      phone,
    };

    addContact(newContact);
    setName('');
    setPhone('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name-input">
        Name:
        <StyledInput
          id="name-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="phone-input">
        Phone:
        <StyledInput
          id="phone-input"
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;



