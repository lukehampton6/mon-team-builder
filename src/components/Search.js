import { useEffect, useState } from "react";
import { TextField, Button, Card, Grid, Container } from "@mui/material";
import PokeCard from "./PokeCard";

function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("no pokemon found :(");
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
  }, [value]);

  function handleSubmit(event) {
    event.preventDefault();
    setValue(name);
  }

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ p: 2, m: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  id="filled-basic"
                  label="pokemon name"
                  variant="outlined"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div>{data && <PokeCard key={data} props={data} />}</div>
    </div>
  );
}

export default Search;
