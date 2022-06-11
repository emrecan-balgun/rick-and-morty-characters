import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { pageNumber, perPage } from '../../app/rickAndMortySlice';
import { GET_LOCATIONS_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";
import { Col, Badge } from 'react-bootstrap';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addLocationValue, removeLocationValue } from '../../app/rickAndMortySlice';

function Location() {
    const dispatch = useDispatch();
    const pageNum = useSelector(pageNumber);
    const perPages = useSelector(perPage);
    let locationsArray = [];

    const { loading, error, data } = useQuery(GET_LOCATIONS_BY_PAGE, {
        variables: {
            page: pageNum,
        },
    });
 
    useEffect(() => {
        // if (data) {
        //   setState(data)
        // }
    }, [pageNum]);
    
    if (error) {
        return <Error message={error.message} />;
    }
    
    if (loading) {
        return <Loading />;
    }

    for(const location of data.locations.results.slice(0,perPages)) {
        if(!locationsArray.includes(location.name)) {
            locationsArray.push(location.name);
        }
    }

    let locationsCountArray = [];

    for(let k = 0; k < locationsArray.length; k++) {
        locationsCountArray.push(0);
    }

    for(let i = 0; i < perPages; i++) {
        for(let j = 0; j < locationsArray.length; j++) {
            if(data.locations.results[i].name == locationsArray[j]) {
                locationsCountArray[j] += 1;
            }
        }
    }

  return (
    <Col className="text-start py-3">
          <span className="filtersTitle">location</span>
          {
              locationsArray.map((location, idx) => (
                 <label className="checkContainer" key={nanoid()}>
                    {location}
                    <input type="checkbox" value={location} onChange={(e) => e.target.checked ? dispatch(addLocationValue(e.target.value)) : dispatch(removeLocationValue(e.target.value))}/>
                    <Badge bg="light" text="dark">{locationsCountArray[idx]}</Badge>
                    <span className="checkmark"></span>
                  </label>
              ))
          }
    </Col>
  )
}

export default Location