import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts); // Використання селектора

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;