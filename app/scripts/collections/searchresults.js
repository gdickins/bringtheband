import Backbone from 'backbone';
import SearchResult from '../models/searchresult';

const SearchResults = Backbone.Collection.extend({
  url: 'https://api.spotify.com/v1/search',
  model: SearchResult,

  comparator: function(band) {
    return band.get('voteCount') * -1
  },

  parse: function(response) {
    if (response) {
      return response.artists.items
    }
  }
})

export default SearchResults;
