import styled from "styled-components";
import s from "underscore.string";
import {zerofill} from "../utils/Zerofill";
import {getColorOfPokemonType} from "../utils/GetColorOfPokemonType";

function getType(item: any) {
  return item.types[0].type.name;
}

export const PokemonCard = (props: { item: any }) => (
  <Card>
    <CardBody color={getColorOfPokemonType(getType(props.item))}>
      <CardTitle color={getColorOfPokemonType(getType(props.item))}>#{zerofill(props.item.id,3)}</CardTitle>
      <PokemonImage src={props.item.sprites.other["official-artwork"].front_default} alt={props.item.name}/>
    </CardBody>
    <CardFooterContainer color={getColorOfPokemonType(getType(props.item))}>
      <span>{s.capitalize(props.item.name)}</span>
    </CardFooterContainer>
  </Card>
);

interface ColoredComponent {
  readonly color: string;
}

const Card = styled.div`
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #FFFFFF;
`

const CardBody = styled.div<ColoredComponent>`
  display: flex;
  flex-direction: column;
  align-items: center;  
  border: 1px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
`

const CardTitle = styled.span<ColoredComponent>`
  align-self: flex-end;
  color: ${props => props.color};
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;

  /* Poppins Regular 8 */
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 12px;
`
const CardFooterContainer = styled.div<ColoredComponent>`
  color: #FFFFFF;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  overflow: hidden;
  border: 1px solid ${props => props.color};
  border-radius: 0 0 8px 8px;
`
const PokemonImage = styled.img`
  margin: 0.5rem;
  width: 144px;
  height: 144px;
`
