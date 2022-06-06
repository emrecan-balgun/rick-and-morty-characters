import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Filter() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="filtersHeader">
            <span className="filtersTitle">Filters</span>
            <button disabled className="border-0 bg-transparent clearFiltersButton buttonDisabled">Clear filters</button>
          </div>
        </Col>
        <hr className="my-3"/>
      </Row>
    </Container>
  )
}

export default Filter