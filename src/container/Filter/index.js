import { Container, Row, Col } from 'react-bootstrap';
import Gender from './Gender';
import Species from './Species';

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
      </Row>
    </Container>
  )
}

export default Filter