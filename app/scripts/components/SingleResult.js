import React from 'react';
import store from '../store';

const SingleResult = React.createClass({
  voteHandler: function () {
    store.bandsCollection.voteFor(this.props, store.session.get('username'));
  },
  render: function () {
    let voteView;
    
    if (store.session.get('username')) {
      voteView =
      (   <li className="single-result-container">
          <img className="single-result-img" src={`${this.props.imgUrl}`}/>
          <p className="single-result-name">{this.props.name}</p>
          <input className="vote-btn" onClick={this.voteHandler} type="button" value="Vote for me!"/>
          </li>)
    } else {
      voteView = (
            <li className="single-result-container">
            <img className="single-result-img" src={`${this.props.imgUrl}`}/>
            <p className="single-result-name">{this.props.name}</p>
            </li>
      )
    }
    return (
      <div className="single-result-container">
      {voteView}
      </div>

    )
  }
})

export default SingleResult;
