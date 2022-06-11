import { Container, Row, Col } from 'react-bootstrap';
import Gender from './Gender';
import Species from './Species';
import Location from './Location';

function Filter() {
  function handleClick() {
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="filtersHeader">
            <span className="filtersTitle">Filters</span>
            <button  onClick={handleClick} className="border-0 bg-transparent clearFiltersButton buttonDisabled">Clear filters</button>
          </div>
        </Col>
        <hr className="my-3"/>
        <Gender />
        <hr className="my-3"/>
        <Species />
        <hr className="my-3"/>
        <Location />
      </Row>
    </Container>
  )
}

export default Filter