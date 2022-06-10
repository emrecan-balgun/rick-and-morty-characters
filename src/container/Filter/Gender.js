import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { pageNumber } from '../../app/rickAndMortySlice';
import { GET_ALL_GENDERS, GET_GENDERS_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";
import { Col, Badge } from 'react-bootstrap';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { nanoid } from 'nanoid';

function Gender() {
    const pageNum = useSelector(pageNumber);
    let gendersArray = [];
    
    const { loading, error, data } = useQuery(GET_GENDERS_BY_PAGE, {
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

    for(const gender of data.characters.results) {
        if(!gendersArray.includes(gender.gender)) {
            gendersArray.push(gender.gender);
        }
    }

    let gendersCountArray = [];

    for(let k = 0; k < gendersArray.length; k++) {
    gendersCountArray.push(0);
    }

    for(let i = 0; i < data.characters.results.length; i++) {
        for(let j = 0; j < gendersArray.length; j++) {
            if(data.characters.results[i].gender == gendersArray[j]) {
            gendersCountArray[j] += 1;
            }
        }
        }
  return (
    <Col className="text-start">
          <span className="filtersTitle">gender</span>
          {
              gendersArray.map((character, idx) => (
                 <label className="checkContainer" key={nanoid()}>
                    {character}
                    <input type="checkbox"/>
                    <Badge bg="light" text="dark">{gendersCountArray[idx]}</Badge>
                    <span className="checkmark"></span>
                  </label>
              ))
          }
    </Col>
  )
}

export default Gender