import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";

function Characters() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

  return (
    <div>Characters</div>
  )
}

export default Characters