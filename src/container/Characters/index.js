import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Characters() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
        {
            data.characters.results.map((character) => (
              <div key={character.id}>
                <img src={character.image}/>
                <p>{character.species}</p>
                <p>{character.name}</p>
                <p>{character.location.name}</p>
              </div>
            ))
        }
    </div>
  )
}

export default Characters