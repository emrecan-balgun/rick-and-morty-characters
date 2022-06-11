import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react'

import { useSelector, useDispatch } from 'react-redux';
import { changePageNumber, pageNumber, changePerPage, perPage, searchValue, genderValue, locationValue, speciesValue } from '../../app/rickAndMortySlice';

function Characters() {
  const dispatch = useDispatch();

  const [active, setActive] = useState(1);

  const pageNum = useSelector(pageNumber);
  const perPages = useSelector(perPage);
  const searchInput = useSelector(searchValue);
  const valueOfGenders = useSelector(genderValue);
  const valueOfLocations = useSelector(locationValue);
  const valueOfSpecies = useSelector(speciesValue);

  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
        page: pageNum,
    },
  });

  useEffect(() => {

  }, [pageNum]);
 
  const options = [
    '8 hits per page', 
    '12 hits per page',
    '16 hits per page',
    '20 hits per page',
  ];

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const handlePerPage = (event) => {
    dispatch(changePerPage(event.target.value));
  }

  const handlePageClick = (number) => {
    setActive(number);
    dispatch(changePageNumber(number));
  };

  const filteredData = data.characters.results && data.characters.results.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    item.species.toLowerCase().includes(searchInput.toLowerCase()) ||
    item.location.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  // const filterGenderCharacters = filteredData.slice(0,perPages).filter(item => valueOfGenders?.includes(item.gender))
  const filterSpeciesCharacters = filteredData.slice(0,perPages).filter(item => valueOfSpecies?.includes(item.species))
  const filterLocations = filteredData.slice(0,perPages).filter(item => valueOfLocations.includes(item.location.name))

  // console.log(filterGenderChacters);
  // console.log(filterSpeciesChacters);
  // console.log(filterLocations);

  const displayCharacters =  filterLocations.length !== 0  // || filterSpeciesCharacters.length !== 0
  ? filterLocations.slice(0, perPages) // && filterSpeciesCharacters.slice(0, perPages)
  : filteredData.slice(0, perPages)

  // console.log(displayCharacters);

  return (
    <Container fluid>
      <Row>
        <Col className="perPageFilter">
          <div className="custom-select">
            <select className="select" value={perPages} onChange={(e) => handlePerPage(e)}>
              <option className="option" value={options[0].substring(0,1)}>{options[0]}</option>
              <option className="option" value={options[1].substring(0,2)}>{options[1]}</option>
              <option className="option" value={options[2].substring(0,2)}>{options[2]}</option>
              <option className="option" value={options[3].substring(0,2)}>{options[3]}</option>
            </select>
          </div>
        </Col>
        <hr className="my-3" />
          {
            searchInput.length > 0 
            ? filteredData.slice(0,perPages).map((character) => (
              <Col className="col-3" key={character.id}>
                    <Card className="border-0 p-2">
                      <Card.Img variant="top" src={character.image}/>
                      <Card.Body className="text-start zeroPadding ">
                        <Card.Text className="characterCategory">{character.species}</Card.Text>
                        <Card.Text className="characterName fw-bold">{character.name}</Card.Text>
                        <Card.Text className="characterLocation">{character.location.name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
            ))
            : displayCharacters.slice(0,perPages).map((character) => (
                  <Col className="col-3" key={character.id}>
                    <Card className="border-0 p-2">
                      <Card.Img variant="top" src={character.image}/>
                      <Card.Body className="text-start zeroPadding ">
                        <Card.Text className="characterCategory">{character.species}</Card.Text>
                        <Card.Text className="characterName fw-bold">{character.name}</Card.Text>
                        <Card.Text className="characterLocation">{character.location.name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
            }
            {
              searchInput.length > 0 
              ? ''
              :  <Col className="col-12 mt-4 mb-4">
                <Pagination activePage={active} totalPages={42} onPageChange={(event, data) => handlePageClick(data.activePage)}/>
              </Col>
            }
      </Row>
    </Container>
  )
}


export default Characters

