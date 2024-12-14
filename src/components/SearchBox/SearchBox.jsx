import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;