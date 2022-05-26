import { Container,Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
        <Container fluid className="header">
            <Row>
                <Col>
                    <h1 className="header__title p-3">Wubba Lubba Dub Dub.</h1>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg"><FontAwesomeIcon icon={faSearch}/></span>
                        <input type="text" className="form-control fs-6" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Name, description, location …"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Header