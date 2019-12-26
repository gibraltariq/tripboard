import './author.scss';

import React from 'react';

export default class Author extends React.Component {
  render() {
    return (
      <div className="author">
        <img className="profile" src={require("../../../assets/storyteller_profile.png")}/>
        <p className="name">{this.props.name}</p>
        <p className="features">{this.props.features.join(', ')}</p>
      </div>
    );
  }
}