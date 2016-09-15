import React from 'react';
import Nav from './Nav';
import Search from './Search';
import ResultsView from './SearchResult';

const App = React.createClass({
  render: function () {
    return (
      <div className="main-content">
      <Nav location={this.props.location.pathname} />
      {this.props.children}
      </div>
    )
  }
})

export default App;
