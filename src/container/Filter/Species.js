import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { pageNumber, perPage } from '../../app/rickAndMortySlice';
import { GET_SPECIES_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";
import { Col, Badge } from 'react-bootstrap';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { nanoid } from 'nanoid';

function Species() {
    const pageNum = useSelector(pageNumber);
    const perPages = useSelector(perPage);
    let speciesArray = [];

    const { loading, error, data } = useQuery(GET_SPECIES_BY_PAGE, {
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

    for(const species of data.characters.results.slice(0,perPages)) {
        if(!speciesArray.includes(species.species)) {
            speciesArray.push(species.species);
        }
    }

    let speciesCountArray = [];

    for(let k = 0; k < speciesArray.length; k++) {
        speciesCountArray.push(0);
    }

    for(let i = 0; i < perPages; i++) {
        for(let j = 0; j < speciesArray.length; j++) {
            if(data.characters.results[i].species == speciesArray[j]) {
                speciesCountArray[j] += 1;
            }
        }
    }

  return (
    <Col className="text-start py-3">
          <span className="filtersTitle">species</span>
          {
              speciesArray.map((species, idx) => (
                 <label className="checkContainer" key={nanoid()}>
                    {species}
                    <input type="checkbox" value={species} onChange={(e) => e.target.checked ? '' : ''}/>
                    <Badge bg="light" text="dark">{speciesCountArray[idx]}</Badge>
                    <span className="checkmark"></span>
                  </label>
              ))
          }
    </Col>
  )
}

export default Species