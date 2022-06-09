import { gql } from '@apollo/client';

export const GET_ALL_GENDERS = gql`
    query getAllGenders {
    characters {
        results {
        gender
        }
    }
    }
`;

export const GET_ALL_SPECIES = gql`
    query getAllSpecies {
    characters{
        results{
        species
        }
    }
    }
`;