import styled from "styled-components";
import {useEffect, useState} from "react";

export function SearchBar(props: { placeholder: string }) {
  const [searchText, setSearchText] = useState<string>('')
  const [searchActive, setSearchActive] = useState<boolean>(false)

  useEffect(() => {
    setSearchActive(searchText.trim() !== '')
  }, [searchText])

  return <SearchInput type="text" placeholder={props.placeholder} active={searchActive} value={searchText}
                      onInput={e => setSearchText((e.target as HTMLTextAreaElement).value)}/>;
}

interface SearchInputProps {
  readonly active: boolean;
}

const SearchInput = styled.input<SearchInputProps>`
  width: 100%;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  text-align: ${props => props.active ? "left" : "center"};
`
