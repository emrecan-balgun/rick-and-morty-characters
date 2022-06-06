import { Container,Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Container fluid className="header">
        <Row>
            <Col className="p-3">
                <span className="header__title fs-1">Wubba Lubba Dub Dub.</span>
            </Col>
        </Row>
        <Row>
            <Col className="input-group input-group-lg input__size">
                <span className="search input-group-text bg-white border-0" id="inputGroup-sizing-lg"><FontAwesomeIcon className="p-2 text-warning fa-sm" icon={faSearch}/></span>
                <input type="text" className="form-control fs-6 bg-white border-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Name, description, location …"/>
            </Col>
        </Row>
    </Container>
  )
}

export default Header