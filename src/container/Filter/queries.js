import { gql } from '@apollo/client';

export const GET_GENDERS_BY_PAGE = gql`
query getAllGendersByPage($page: Int!){
        characters(page: $page){
            results{
                id
                gender
            }
        }                           
    }
`;

export const GET_SPECIES_BY_PAGE = gql`
query getAllSpeciesByPage($page: Int!){
        characters(page: $page){
            results{
                id
                species
            }
        }                           
    }
`;

export const GET_ALL_LOCATIONS = gql`
    query getAllLocations {
    locations {
        results {
            id
            name
        }
    }
    }
`;