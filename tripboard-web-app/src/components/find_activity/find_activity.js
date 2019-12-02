import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';

import React from 'react';

export default class FindActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  onSearchInputChange(searchInput){
    this.setState({searchInput});
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <FormControl
              className="searchBar"
              onChange={(event) => this.onSearchInputChange(event.target.value)}
              placeholder="Find by search interest or place"
              size="large"
              type="text"/>
          </Col>
        </Row>
      </Container>
    );
  }
}