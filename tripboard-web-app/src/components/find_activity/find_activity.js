import './find_activity.css';

import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';

import React from 'react';
import SearchBar from './search_bar/search_bar';

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
    console.log(this.state.searchQuery);
    return (
      <div className="page">
        <SearchBar onSearchQueryChange={this.onSearchQueryChange}/>
      </div>
    );
  }
}