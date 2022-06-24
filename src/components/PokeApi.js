import { useEffect, useState } from 'react';

function PokeApi() {
    const [data, setData] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/bulbasaur/')
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setData(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
    }, []);
    
    return (
        <div>
        <h1>Pokemon</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data && (
            <ul>
                <li>{data.name}</li>
                <li>{data.id}</li>
                <li>{data.generation.name}</li>
                <li>{data.flavor_text_entries[0].flavor_text}</li>
            </ul>
        )}
      </ul>
      </div>
    )
}

export default PokeApi;