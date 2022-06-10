import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { pageNumber, perPage } from '../../app/rickAndMortySlice';
import { GET_GENDERS_BY_PAGE } from './queries';
import { useQuery } from "@apollo/client";
import { Col, Badge } from 'react-bootstrap';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { nanoid } from 'nanoid';

function Species() {
  return (
    <div>Species</div>
  )
}

export default Species