import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';
import { selectFilter } from '../../redux/filtersSlice';

const ContactList = () => {

  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);

   const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ) || [];

 return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;