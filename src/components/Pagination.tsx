import styled from "styled-components";

export function Pagination(
  {
    nextURL,
    previousURL,
    updateURLHandler
  }: {
    nextURL: { url: string, enable: boolean },
    previousURL: { url: string, enable: boolean }
    updateURLHandler: (url: string) => void
  }) {

  return (
    <PaginationContainer>
      <PaginationButton disabled={!previousURL.enable}
                        onClick={() => updateURLHandler(previousURL.url)}>Previous</PaginationButton>
      <PaginationButton disabled={!nextURL.enable}
                        onClick={() => updateURLHandler(nextURL.url)}>Next</PaginationButton>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PaginationButton = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid #AAA67F;
  color: #AAA67F;
  height: 2.5rem;
  width: 5rem;

  &:hover:enabled {
    background: #AAA67F;
    color: #FFFFFF;
  }

  &:disabled {
    border: 2px solid #B7B9D0;
    color: #B7B9D0;
  }
`
