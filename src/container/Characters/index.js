import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Characters() {
  const [pageNumber, SetPageNumber] = useState(0);
  const [active, setActive] = useState(1);
  const [veri, setVeri] = useState();
  const [load, setLoad] = useState();
  const [err, setErr] = useState();

    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
      variables: {
          page: pageNumber,
      },
    });

  // function GetData() {
  //   const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
  //     variables: {
  //         page: pageNumber,
  //     },
  //   });
  //   setVeri(data);
  //   setLoad(loading);
  //   setErr(error);
  // }

  // useEffect(() => {
  //   GetData();
  // }, [active])

 
  const options = [
    '16 hits per page', 
    '32 hits per page', 
    '64 hits per page'
  ];

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const handleChange = (event) => {
      console.log(event.target.value)
  }

  const handlePageClick = (number) => {
    console.log(number);
    setActive(number);
  };

  let items = [];
  for (let number = 1; number <= 43; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={(e) => handlePageClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Container>
      <Row>
        <Col className="perPageFilter">
          <div className="custom-select">
            <select className="select" defaultValue={options[0]} onChange={(e) => handleChange(e)}>
              <option className="option" value={options[0]}>{options[0]}</option>
              <option className="option" value={options[1]}>{options[1]}</option>
              <option className="option" value={options[2]}>{options[2]}</option>
            </select>
          </div>
        </Col>
        <hr className="my-4" />
          {
                data.characters.results.map((character) => (
                  <Col className="col-3" key={character.id}>
                    <Card className="border-0">
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
        <Col className="col-12 pagination">
            <Pagination>{items}</Pagination>
        </Col>
      </Row>
    </Container>
  )
}


export default Characters

