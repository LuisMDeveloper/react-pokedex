import styled from "styled-components"

interface IconProps {
  readonly size: string;
}

export const Icon = styled.img<IconProps>`
  height: ${props => props.size || "32px"};
  width: ${props => props.size || "32px"};
`
