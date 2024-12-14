import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;  