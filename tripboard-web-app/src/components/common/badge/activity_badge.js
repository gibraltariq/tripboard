import './activity_badge.scss';

import React from 'react';

export default class ActivityBadge extends React.Component {
  render() {
    return (
      <span className="activityBadge">{this.props.children}</span>
    );
  }
}