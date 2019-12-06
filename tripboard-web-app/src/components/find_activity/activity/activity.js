import './activity.css';

import React from 'react';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activity">
        <p className="title">Sunset View of Alhambra</p>
      </div>
    );
  }
}