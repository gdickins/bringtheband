import React from 'react';
import { Link } from 'react-router';
import Search from './Search';
import store from '../store';

const Nav = React.createClass({
  getInitialState: function () {
    return {session: store.session.toJSON()}
  },
  updateState: function() {
    this.setState({session: store.session.toJSON()});
  },

  componentDidMount: function() {
    store.session.on('update change', this.updateState);
  },

  componentWillUnmount: function () {
    store.session.off('update change', this.updateState);
  },

  logOutHandler: function () {
    store.session.logout();
  },

  render: function () {

    let searchView;
    if (this.props.location === '/searchresults') {
      searchView = <Search navsearch={true} />
    } else {
      searchView = ''
    }

    let navView;

    if (!store.session.get('username')) {
      navView = (
        <nav>
          {searchView}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      )
    } else {
      navView = (
        <nav>
          {searchView}
          <Link onClick={this.logOutHandler} to="#">Logout</Link>
          <Link to="/votes">Votes</Link>
          <Link to="/">Search</Link>
        </nav>
      )
    }

    return (
      <div>
        {navView}
      </div>
    )
  }
})

export default Nav;
