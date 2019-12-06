import './activity_grid.css';

import Activity from '../activity/activity';
import React from 'react';

export default class ActivityGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activityGrid">
          <Activity/>
          <Activity/>
          <Activity/>
      </div>
    );
  }
}