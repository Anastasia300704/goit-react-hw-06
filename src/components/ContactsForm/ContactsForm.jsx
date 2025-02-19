import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

function ContactsForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newContact = { id: Date.now(), name };
      dispatch(addContact(newContact));
      setName(''); // Очистить поле после добавления
    } 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter contact name"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
}

export default ContactsForm;
