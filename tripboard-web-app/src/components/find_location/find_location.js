import './find_location.css';

import {Col, Container, FormControl, Row} from 'react-bootstrap';

import React from 'react';

function FindLocation() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <FormControl className="searchBar" size="large" type="text" placeholder="Search..."/>
        </Col>
      </Row>
    </Container>
  );
}

export default FindLocation;