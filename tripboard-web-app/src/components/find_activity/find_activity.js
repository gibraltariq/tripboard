import './find_activity.css';

import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';

import ActivityGrid from './activity_grid/activity_grid'
import React from 'react';
import SearchBar from './search_bar/search_bar';

const FAKE_ITEMS = [
  {title: 'Sunset View of Alhambra'},
  {title: 'Mezquita Mayor'},
  {title: 'Damashqi'},
];

export default class FindActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  onSearchQueryChange = (query) => {
    this.setState({searchQuery: query})
  }

  render() {
    return (
      <div className="page">
        <SearchBar onSearchQueryChange={this.onSearchQueryChange}/>
        <ActivityGrid activities={FAKE_ITEMS}/>
      </div>
    );
  }
}