import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';


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
        <Col className="text-start">  
          <span className="filtersTitle">gender</span>
          {

          }
            <label class="checkContainer">
              One
              <input type="checkbox"/>
              <Badge bg="light" text="dark">100</Badge>
              <span class="checkmark"></span>
            </label>
        </Col>
      </Row>
    </Container>
  )
}

export default Filter