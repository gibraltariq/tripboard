import {Button, Col, Container, FormControl, Row} from 'react-bootstrap';

import React from 'react';

export default class FindLocation extends React.Component {
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
          <Col md="11">
            <FormControl
              className="searchBar"
              onChange={(event) => this.onSearchInputChange(event.target.value)}
              placeholder="Where to?"
              size="large"
              type="text"/>
          </Col>
          <Col md="1">
            <Button>Go</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}