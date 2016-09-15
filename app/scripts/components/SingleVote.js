import React from 'react';
import store from '../store';

const SingleVote = React.createClass({
  render: function () {
    return (
      <li className="single-vote-holder">
        <img className="single-vote-img" src={`${this.props.imgUrl}`}/>
        <p className="single-vote-name">{this.props.name}</p>
        <p className="single-vote-count"><span>Total Votes: </span>{this.props.voteCount}</p>
      </li>
    )
  }
});

export default SingleVote;
