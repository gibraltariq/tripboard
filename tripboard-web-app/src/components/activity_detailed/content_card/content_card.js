import './content_card.css';

import React from 'react';

export default class ContentCard extends React.Component {
  render() {
    return (
      <div className="contentCard">
        <h1 className="contentCardTitle">{this.props.title}</h1>
        <p className="contentCardDetails">{this.props.children}</p>
      </div>
    );
  }
}