import Bands from './collections/bands';
import Band from './models/band';
import Session from './models/session';
import SearchResult from './models/searchresult';
import SearchResults from './collections/searchresults';

let store = {
  bandsCollection: new Bands(),
  session: new Session(),
  searchCollection: new SearchResults()
}

export default store;
