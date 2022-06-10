import { Container, Row, Col } from 'react-bootstrap';
import Gender from './Gender';

function Filter() {
  // const { loading, error, data } = useQuery(GET_ALL_GENDERS);


  // const genderItem = []
  // data.characters.results.forEach(item => { genderItem[item.gender] = (genderItem[item.gender] || 0) + 1 });
  // console.log(genderItem);

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
      </Row>
    </Container>
  )
}

export default Filter