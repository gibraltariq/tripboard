import './find_activity.css';

import ActivityGrid from './activity_grid/activity_grid'
import NextButton from './next_button/next_button';
import React from 'react';
import SearchBar from './search_bar/search_bar';

const FAKE_ITEMS = [
  {
    title: 'Sunset View of Alhambra',
    storyteller: {name: 'Danny T', features: ['Muslim', 'Spanish', 'globetrotter']},
    description: 'If you’re anywhere in or near Grenada, this is just the most phenomenal view you could imagine of a Moorish palace. The sun sets to the left of this palace established by Sultan Yusuf of the Emirate of Granada and lights the walls with a fiery glow, just as the palace lights turn on.'
  },
  {
    title: 'Mezquita Mayor',
    storyteller: {name: 'Danny T', features: ['Muslim', 'Spanish', 'globetrotter']},
    description: 'If you’re anywhere in or near Grenada, this is just the most phenomenal view you could imagine of a Moorish palace. The sun sets to the left of this palace established by Sultan Yusuf of the Emirate of Granada and lights the walls with a fiery glow, just as the palace lights turn on.'
  },
  {
    title: 'Damashqi',
    storyteller: {name: 'Danny T', features: ['Muslim', 'Spanish', 'globetrotter']},
    description: 'If you’re anywhere in or near Grenada, this is just the most phenomenal view you could imagine of a Moorish palace. The sun sets to the left of this palace established by Sultan Yusuf of the Emirate of Granada and lights the walls with a fiery glow, just as the palace lights turn on.'
  },
];

export default class FindActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedActivities: [],
    };
  }

  onSearchQueryChange = (query) => {
    this.setState({searchQuery: query})
  }

  render() {
    return (
      <div className="findActivity">
        <SearchBar onSearchQueryChange={this.onSearchQueryChange}/>
        <ActivityGrid activities={FAKE_ITEMS}/>
        <NextButton
          subtext={`${this.state.selectedActivities.length} selected`}>
          Add activities
        </NextButton>
      </div>
    );
  }
}