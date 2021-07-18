import styled from "styled-components";
import {useEffect, useState} from "react";
import {PokemonCard} from "./PokemonCard";
import {Pagination} from "./Pagination";

export function PokemonGrid() {
  const [apiEndpoint, setAPIEndpoint] = useState<string>('https://pokeapi.co/api/v2/pokemon')
  const [nextURL, setNextURL] = useState<any>({url: '', enable: false})
  const [previousURL, setPreviousURL] = useState<any>({url: '', enable: false})
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    async function fetchPokemon() {
      let pokemonListResult = await fetch(apiEndpoint)
      let pokemonListJSON = await pokemonListResult.json()
      if (pokemonListJSON) {
        setPreviousURL({url: pokemonListJSON.previous, enable: pokemonListJSON.previous !== null})
        setNextURL({url: pokemonListJSON.next, enable: pokemonListJSON.next !== null})
        let pokemonURL = pokemonListJSON.results.map((res: { url: string }) => res.url)
        let pokemonFullInfoResult = await Promise.all(pokemonURL.map((url: string) => fetch(url)))
        let pokemonFullInfoJSON = await Promise.all(pokemonFullInfoResult.map((res: any) => res.json()))
        setItems(pokemonFullInfoJSON)
      }
    }

    fetchPokemon()
  }, [apiEndpoint])

  function updateURLHandler(url: string) {
    setAPIEndpoint(url)
  }

  return (
    <div>
      <Grid>
        {items.map(item => {
          return (
            <PokemonCard item={item}/>
          )
        })}
      </Grid>
      <Pagination nextURL={nextURL} previousURL={previousURL} updateURLHandler={updateURLHandler}/>
    </div>
  );
}

const Grid = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
