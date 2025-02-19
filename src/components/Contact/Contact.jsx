import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      {contact.name}
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
