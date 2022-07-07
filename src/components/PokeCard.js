import { Card } from "@mui/material";

function PokeCard(data) {
    console.log(data);
    return (
        <Card>
            <img src={data.props.sprites.front_default}></img>
            <p>{data.props.name}</p>
            <p>{data.props.id}</p>
            {data.props.abilities?.map((abilityName) => {
              return <p key={abilityName}>{abilityName.ability.name}</p>;
            })}
          </Card>
    )
}

export default PokeCard;