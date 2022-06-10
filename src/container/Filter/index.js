import { useState, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { GET_ALL_GENDERS, GET_GENDERS_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";

function Filter() {
  // const [pageNumber, setPageNumber] = useState(1);
  let gendersArray = [];

  const { loading, error, data } = useQuery(GET_ALL_GENDERS);
  // const { loading, error, data } = useQuery(GET_GENDERS_BY_PAGE, {
  //   variables: {
  //       page: pageNumber,
  //   },
  // });

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  // const genderItem = []
  // data.characters.results.forEach(item => { genderItem[item.gender] = (genderItem[item.gender] || 0) + 1 });
  // console.log(genderItem);


  // console.log(data.characters.results);

  // for(let i = 1; i < 10; i++) {
  //   setPageNumber(i+1);
  //   for(const gender of data.characters.results) {
  //     if(!gendersArray.includes(gender.gender)) {
  //       gendersArray.push(gender.gender);
  //     }
  //   }
  // }



  // for(const gender of data.characters.results) {
  //   if(!gendersArray.includes(gender.gender)) {
  //     gendersArray.push(gender.gender);
  //   }
  // }

  // console.log(gendersArray);
  

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
        {/* Gender Filter */}
        <Col className="text-start">
          <span className="filtersTitle">gender</span>
          {
              // data.characters.results.map((character) => (
              //    <label className="checkContainer" key={character.id}>
              //       {character.gender}
              //       <input type="checkbox"/>
              //       {/* <Badge bg="light" text="dark">100</Badge> */}
              //       <span className="checkmark"></span>
              //     </label>
              // ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Filter