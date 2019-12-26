import './add_activity_button.scss';

import NextButton from '../../find_activity/next_button/next_button';
import React from 'react';

export default class AddActivityButton extends React.Component {
  render() {
    return (
      <div className="addActivityButton">
        <NextButton>{this.props.children}</NextButton>
      </div>
    );
  }
}