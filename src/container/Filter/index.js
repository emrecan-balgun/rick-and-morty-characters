import { Container, Row, Col } from 'react-bootstrap';
import Gender from './Gender';
import Species from './Species';
import Location from './Location';

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