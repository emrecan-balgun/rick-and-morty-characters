import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Filter() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="filtersHeader">
            <span className="filtersTitle">Filters</span>
            <button disabled className="border-0 bg-transparent clearFilters">Clear filters</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Filter