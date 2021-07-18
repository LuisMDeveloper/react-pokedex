import Pokeball from "../Assets/Pokeball.svg";
import SortByNumber from "../Assets/SortByNumber.svg";
import styled from "styled-components"
import {Icon} from "./atoms/Icon";
import {Header1} from "./atoms/Header1";

export function Header() {
  return (
    <HeaderContainer>
      <Icon src={Pokeball} size={'32px'}/>
      <Header1>Pokédex</Header1>
      <Icon src={SortByNumber} size={'32px'}/>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
