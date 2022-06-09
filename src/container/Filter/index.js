import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { GET_ALL_GENDERS } from './queries';
import { useQuery } from "@apollo/client";

function Filter() {
  const { loading, error, data } = useQuery(GET_ALL_GENDERS);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  // console.log(data.characters.results);

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
              data.characters.results.map((character) => (
                <label className="checkContainer" key={character.id}>
                  {character.gender}
                  <input type="checkbox"/>
                  {/* <Badge bg="light" text="dark">100</Badge> */}
                  <span className="checkmark"></span>
                </label>
              ))
          }
            {/* <label className="checkContainer">
              One
              <input type="checkbox"/>
              <Badge bg="light" text="dark">100</Badge>
              <span className="checkmark"></span>
            </label> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Filter