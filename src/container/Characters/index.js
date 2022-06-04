import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Container, Row, Col, Card, InputGroup, FormControl, DropdownButton, Dropdown  } from 'react-bootstrap';

function Characters() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Row>
        {/* <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-none"
            title="16 hits per page"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item active href="#">16 hits per page</Dropdown.Item>
            <Dropdown.Item href="#">32 hits per page</Dropdown.Item>
            <Dropdown.Item href="#">64 hits per page</Dropdown.Item>
          </DropdownButton>
        </InputGroup> */}
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