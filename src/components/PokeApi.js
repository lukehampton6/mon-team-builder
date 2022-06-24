import { useEffect, useState, useRef } from 'react';

function PokeApi() {
    const [data, setData] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const nameRef = useRef();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                'no pokemon found :('
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
    });

    function handleSubmit(event) {
        event.preventDefault();
        setName(nameRef.current.value);
    }

    return (
        <div>
         <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                id="name"
                type="text"
                ref={nameRef}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
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