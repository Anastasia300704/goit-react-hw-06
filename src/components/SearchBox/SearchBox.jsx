import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      onChange={handleFilterChange}
      placeholder="Search contacts"
      className={styles.input}
    />
  );
}

export default SearchBox;
