import './search_bar.css';

import {Button, FormControl} from 'react-bootstrap';

import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <FormControl
          className="searchField"
          onChange={(event) => this.props.onSearchQueryChange(event.target.value)}
          placeholder="Find activities by interest or place"
          size="large"
          type="text"/>
        <Button className="searchButton">Search</Button>
      </div>
    );
  }
}