import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Container, Row, Col, Card  } from 'react-bootstrap';


function Characters() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

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
      </Row>
    </Container>
  )
}

export default Characters