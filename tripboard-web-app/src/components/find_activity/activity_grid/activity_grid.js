import './activity_grid.css';

import Activity from '../activity/activity';
import React from 'react';

export default class ActivityGrid extends React.Component {
  render() {
    const activities = this.props.activities.map((activityData) => {
      return (<Activity data={activityData}/>);
    });
    return (
      <div className="activityGrid">
        {activities}
      </div>
    );
  }
}