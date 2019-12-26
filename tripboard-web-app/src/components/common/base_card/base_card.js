import './base_card.css';

import React from 'react';

export default class BaseCard extends React.Component {
  render() {
    return (
      <div className="baseCard">
        <div className="details">{this.props.children}</div>
      </div>
    );
  }
}