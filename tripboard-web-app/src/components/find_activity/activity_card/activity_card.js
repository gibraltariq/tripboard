import './activity_card.css';

import AddActivtyButton from '../../common/add_activity_button/add_activity_button';
import Author from '../../common/author/author';
import React from 'react';

export default class ActivityCard extends React.Component {
  render() {
    return (
      <div className="activityCard">
        <div className="preview">
          <AddActivtyButton>Add</AddActivtyButton>
          <img className="picture" src={require("../../../assets/alhambra_activity.png")}/>
        </div>
        <div className="content">
          <h1 className="title">{this.props.data.title}</h1>
          <Author
            features={this.props.data.storyteller.features}
            name={this.props.data.storyteller.name}
          />
          <p className="description">{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}