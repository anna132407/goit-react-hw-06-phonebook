import { setFilterValue } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { SearchInput, SearchLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput
        type="text"
        name="name"
        required
        onChange={e => dispatch(setFilterValue(e.target.value))}
      />
    </SearchLabel>
  );
};