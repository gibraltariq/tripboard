import './activity_detailed.css';

import AddActivityButton from '../common/add_activity_button/add_activity_button';
import Author from '../common/author/author';
import ContentCard from './content_card/content_card';
import React from 'react';

const FAKE_ACTIVITY = {
  title: 'Sunset View of Alhambra',
  author: {name: 'Danny T', features: ['Muslim', 'Spanish', 'globetrotter']},
  description: 'If you’re anywhere in or near Grenada, this is just the most phenomenal view you could imagine of a Moorish palace. The sun sets to the left of this palace established by Sultan Yusuf of the Emirate of Granada and lights the walls with a fiery glow, just as the palace lights turn on.',
  howToGetThere: 'Park on a street clearly marked as a parking location here. Do not risk getting your car towed.',
  thingsToKnow: 'Go 30 minutes early to get a nice seat on the bench.',
  whyTrustMe: 'I’ve taken sunset and sunrise pictures all over the world from a Bostwana village to the Italian Alps - 36700 in total (see my Instagram @cookiemonster). I majored in Photography & Visual Arts at the Rhode Island School of Design and can tell you the exact hex values that make a sunset/sunrise different and the colors that usually make them beautiful to a human eye.',
};

export default class ActivityDetailed extends React.Component {
  render() {
    return (
      <div className="activityDetailed">
        <div className="activityDetailedPreview">
          <AddActivityButton>Add to trip</AddActivityButton>
          <img className="activityDetailedPicture" src={require("../../assets/alhambra_activity.png")}/>
        </div>
        <div className="activityDetailedContent">
          <h1 className="activityDetailedTitle">{FAKE_ACTIVITY.title}</h1>
          <Author
            features={FAKE_ACTIVITY.author.features}
            name={FAKE_ACTIVITY.author.name}
          />
          <ContentCard className="activityDetailedDescription">
            {FAKE_ACTIVITY.description}
          </ContentCard>
          {FAKE_ACTIVITY.howToGetThere &&
            <ContentCard
              title="How to get there"
            >
              {FAKE_ACTIVITY.howToGetThere}
            </ContentCard>
          }
          {FAKE_ACTIVITY.thingsToKnow &&
            <ContentCard
              title="Things to know"
            >
              {FAKE_ACTIVITY.thingsToKnow}
            </ContentCard>
          }
          {FAKE_ACTIVITY.whyTrustMe &&
            <ContentCard
              title="Why trust me"
            >
              {FAKE_ACTIVITY.whyTrustMe}
            </ContentCard>
          }
        </div>
      </div>
    );
  }
}