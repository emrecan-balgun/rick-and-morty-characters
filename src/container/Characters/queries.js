import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
    query getAllCharacters($page: Int!){
        characters(page: $page){
            results{
            id
            name
            species
            image
            location{
                name
            }
            }
        }                           
    }
`;