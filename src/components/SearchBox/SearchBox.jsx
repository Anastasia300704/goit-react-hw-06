import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filter = useSelector(selectFilter); // Використання селектора
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value)); // Диспетчеризація дії
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;  