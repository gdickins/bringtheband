import Backbone from 'backbone';

const SearchResult = Backbone.Model.extend({
  urlRoot: 'https://api.spotify.com/v1/search',
})

export default SearchResult;
