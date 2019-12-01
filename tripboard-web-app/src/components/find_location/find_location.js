import './find_location.css';

import {Col, Container, FormControl, Row} from 'react-bootstrap';

import React from 'react';

class FindLocation extends React.Component {
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
              placeholder="Where to?"
              size="large"
              type="text"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FindLocation;