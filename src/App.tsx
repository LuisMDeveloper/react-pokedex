import {Header} from "./components/Header";
import {MainContainer} from "./components/atoms/MainContainer";
import {PokemonGrid} from "./components/PokemonGrid";

function App() {
  return (
    <MainContainer>
      <Header/>
      <PokemonGrid/>
    </MainContainer>
  );
}

export default App;
