import { useEffect, useState, useRef } from 'react';

function PokeApi() {
    const [data, setData] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const nameRef = useRef();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                'no pokemon found :('
              );
            }
            return response.json();
          })
          .then((actualData) => {
            console.log(actualData);
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
    }, [name]);

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
        <div>
            {data && (
                <div>
                    <img src={data.sprites.front_default}></img>
                    <p>{data.name}</p>
                    <p>{data.id}</p>
                    {data.abilities?.map((abilityName) => {
                        return (
                            <p key={abilityName}>{abilityName.ability.name}</p>
                        )
                    })}
                </div>
            )}
        </div>
        </div>
    )
}

export default PokeApi;