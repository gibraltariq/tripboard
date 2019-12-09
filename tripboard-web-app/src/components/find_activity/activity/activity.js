import './activity.css';

import React from 'react';

export default class Activity extends React.Component {
  render() {
    return (
      <div className="activity">
        <img className="glimpse" src={require("../../../assets/alhambra_activitiy.png")}/>
        <div className="content">
          <h1 className="title">{this.props.data.title}</h1>
          <div className="storyteller">
            <img className="profile" src={require("../../../assets/storyteller_profile.png")}/>
            <p className="name">{this.props.data.storyteller.name}</p>
            <p className="features">{this.props.data.storyteller.features.join(', ')}</p>
          </div>
          <p className="description">{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}