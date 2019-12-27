import './itinerary.scss';

import React from 'react';
import SideIconCard from './side_icon_card/side_icon_card';

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="itinerary">
        <h1 className="sectionHeader">General tips</h1>
        <SideIconCard
          iconSrc={require('../../assets/images/important_tip_icon.png')}
          text={'I highly recommend getting the Spain travel pass. Tap for details.'}
        />
      </div>
    );
  }
}