import './content_card.css';

import React from 'react';

const CONTENT_TITLES = {
  howToGetThere: 'How to get there',
  thingsToKnow: 'Things to know',
  whyTrustMe: 'Why trust me',
};

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