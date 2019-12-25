import './activity_detailed.css';

import AddActivityButton from '../common/add_activity_button/add_activity_button';
import Author from '../common/author/author';
import React from 'react';

const FAKE_ACTIVITY = {
  title: 'Sunset View of Alhambra',
  author: {name: 'Danny T', features: ['Muslim', 'Spanish', 'globetrotter']},
  description: 'If you’re anywhere in or near Grenada, this is just the most phenomenal view you could imagine of a Moorish palace. The sun sets to the left of this palace established by Sultan Yusuf of the Emirate of Granada and lights the walls with a fiery glow, just as the palace lights turn on.'
};

export default class ActivityDetailed extends React.Component {
  render() {
    return (
      <div className="activityDetailed">
        <div className="preview">
          <AddActivityButton>Add to trip</AddActivityButton>
          <img className="picture" src={require("../../assets/alhambra_activity.png")}/>
        </div>
        <div className="content">
          <h1 className="title">{FAKE_ACTIVITY.title}</h1>
          <Author
            features={FAKE_ACTIVITY.author.features}
            name={FAKE_ACTIVITY.author.name}
          />
          <p className="description">{FAKE_ACTIVITY.description}</p>
        </div>
      </div>
    );
  }
}