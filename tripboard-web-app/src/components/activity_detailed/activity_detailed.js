import './activity_detailed.scss';

import AddActivityButton from '../common/add_activity_button/add_activity_button';
import Author from '../common/author/author';
import ContentCard from './content_card/content_card';
import {FAKE_ITEMS} from '../../assets/fake_store';
import React from 'react';

const FAKE_ACTIVITY = FAKE_ITEMS[0];

export default class ActivityDetailed extends React.Component {
  render() {
    return (
      <div className="activityDetailed">
        <div className="activityDetailedPreview">
          <AddActivityButton>Add to trip</AddActivityButton>
          <img className="activityDetailedPicture" src={require("../../assets/images/alhambra_activity.png")}/>
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