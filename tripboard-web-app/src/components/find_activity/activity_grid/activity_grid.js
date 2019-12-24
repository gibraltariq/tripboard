import './activity_grid.css';

import ActivityCard from '../activity_card/activity_card';
import React from 'react';

export default class ActivityGrid extends React.Component {
  render() {
    const activities = this.props.activities.map((activityData) => {
      return (<ActivityCard data={activityData}/>);
    });
    return (
      <div className="activityGrid">
        {activities}
      </div>
    );
  }
}