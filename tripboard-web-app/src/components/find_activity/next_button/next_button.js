import './next_button.scss';

import React from 'react';

export default class NextButton extends React.Component {
  render() {
    return (
      <button className="button">
        <div className="mainText">{this.props.children}</div>
        <div className="subtext">{this.props.subtext}</div>
      </button>
    );
  }
}