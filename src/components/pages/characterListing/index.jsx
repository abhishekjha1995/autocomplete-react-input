import { useDispatch, useSelector } from 'react-redux';
import './characterListing.css';
import AutoComplete from '../../organisms/autoComplete';
import { debounce } from '../../../utility/commonUtility';

function CharacterListing() {
  const dispatch = useDispatch(),
    characters = useSelector(({ characters }) => characters);

  /**
   * make api call to filter list on the basis of search term
   * 
   * @param {string} searchTerm 
   */
  function searchHandler(searchTerm) {
    if (searchTerm) {
      dispatch({
        type: "GET_CHARACTERS_REQUEST",
        endpoint: "/character",
        params: { name: searchTerm }
      });
    }
  }

  return (
    <div className="App">
      <AutoComplete
        id="characterName"
        type="text"
        iconClass="fa fa-search"
        searchHandler={debounce(searchHandler, 300)}
        suggestedValues={characters || []}
        displayKey="name"
      />
    </div>
  );
}

export default CharacterListing;
