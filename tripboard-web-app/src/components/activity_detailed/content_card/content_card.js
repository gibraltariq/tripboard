import './content_card.css';

import BaseCard from '../../common/base_card/base_card';
import React from 'react';

export default class ContentCard extends React.Component {
  render() {
    return (
      <div className="contentCard">
        <h1 className="title">{this.props.title}</h1>
        <BaseCard>{this.props.children}</BaseCard>
      </div>
    );
  }
}