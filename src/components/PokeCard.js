import { Card, Grid, Box, Typography, Chip } from "@mui/material";

function PokeCard(data) {

  return (
    <Card variant="outlined" sx={{ p: 2, m: 2 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} textAlign="right">
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            src={data.props.sprites.front_default}
          />
        </Grid>
        <Grid item xs={6} textAlign="left">
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            src={data.props.sprites.back_default}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3">{data.props.name}</Typography>
          <Typography variant="h5">#{data.props.id}</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
            <Typography variant="h6">types:</Typography>
            {data.props.types?.map((typeName) => {
            return <Chip sx={{m: 1}} key={typeName} id={typeName.type.name} label={typeName.type.name}/>;
            })}
        </Grid>
        <Grid item xs={12} textAlign="center">
        <Typography variant="h6">abilities:</Typography>
          {data.props.abilities?.map((abilityName) => {
            return <Chip sx={{m: 1}} key={abilityName} label={abilityName.ability.name}/>;
          })}
        </Grid>
      </Grid>
    </Card>
  );
}

export default PokeCard;
