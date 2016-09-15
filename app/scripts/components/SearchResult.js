import React from 'react';
import store from '../store';
import SingleResult from './SingleResult';

const ResultsView = React.createClass({
  getInitialState: function () {
    return {
      searchCollection: store.searchCollection.toJSON()
    }
  },
  updateComponent: function() {
      this.setState({searchCollection: store.searchCollection.toJSON()
      });
  },
  componentWillMount: function () {
    store.searchCollection.on('update change', this.updateComponent.bind(this))
  },

  componentWillUnmount: function () {
    store.searchCollection.off('update change', this.updateComponent.bind(this))
  },

  render: function () {
    let bands = store.searchCollection.map((band, i, arr) => {
      let bandName = band.get('name');
      let bandId = band.get('id');
      let bandImg;

      if (band.get('images')[0]) {
        bandImg = band.get('images')[0].url;
      } else {
        bandImg = 'http://fillmurray.com/g/800/500'
      }
      return <SingleResult key={i} id={bandId} name={bandName} imgUrl={bandImg}/>
    })
    return (
      <div className="results-holder">
        <h2>Your Results</h2>
        <ul className="results-list">
          {bands}
        </ul>
      </div>
    )
  }
})

export default ResultsView;
