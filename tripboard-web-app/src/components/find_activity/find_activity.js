import './find_activity.css';

import ActivityGrid from './activity_grid/activity_grid'
import {FAKE_ITEMS} from '../../assets/fake_store';
import NextButton from './next_button/next_button';
import React from 'react';
import SearchBar from './search_bar/search_bar';

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