import './side_icon_card.scss';

import BaseCard from '../../common/base_card/base_card';
import React from 'react';

export default class SideIconCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sideIconCard">
        <BaseCard>
          <img className="icon" src={this.props.iconSrc}/>
          <p className="text">{this.props.text}</p>
        </BaseCard>
      </div>
    );
  }
}