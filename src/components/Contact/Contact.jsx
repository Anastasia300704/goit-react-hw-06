const Contact = ({ name , number, id }) => {
  const dispatch = useDispatch();


  const handleDelete = () => {
    dispatch(deleteContact(id));
  };


  return (
    <li>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

 
