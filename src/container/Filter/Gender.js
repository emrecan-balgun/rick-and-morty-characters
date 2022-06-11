import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { pageNumber, perPage } from '../../app/rickAndMortySlice';
import { GET_GENDERS_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";
import { Col, Badge } from 'react-bootstrap';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addGenderValue, removeGenderValue } from '../../app/rickAndMortySlice';


function Gender() {
    const dispatch = useDispatch();
    const pageNum = useSelector(pageNumber);
    const perPages = useSelector(perPage);
    let gendersArray = [];

    const { loading, error, data } = useQuery(GET_GENDERS_BY_PAGE, {
        variables: {
            page: pageNum,
        },
    });

    // const genderItem = []
    // data.characters.results.forEach(item => { genderItem[item.gender] = (genderItem[item.gender] || 0) + 1 });
    // console.log(genderItem);
    
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

    for(const gender of data.characters.results.slice(0,perPages)) {
        if(!gendersArray.includes(gender.gender)) {
            gendersArray.push(gender.gender);
        }
    }

    let gendersCountArray = [];

    for(let k = 0; k < gendersArray.length; k++) {
    gendersCountArray.push(0);
    }

    for(let i = 0; i < perPages; i++) {
        for(let j = 0; j < gendersArray.length; j++) {
            if(data.characters.results[i].gender == gendersArray[j]) {
            gendersCountArray[j] += 1;
            }
        }
    }
  return (
    <Col className="text-start py-3">
          <span className="filtersTitle">gender</span>
          {
              gendersArray.map((gender, idx) => (
                 <label className="checkContainer" key={nanoid()}>
                    {gender}
                    <input type="checkbox" value={gender} onChange={(e) => e.target.checked ? dispatch(addGenderValue(e.target.value)) : dispatch(removeGenderValue(e.target.value))} />
                    <Badge bg="light" text="dark">{gendersCountArray[idx]}</Badge>
                    <span className="checkmark"></span>
                  </label>
              ))
          }
    </Col>
  )
}

export default Gender