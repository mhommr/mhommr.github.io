import { styled } from "@mui/material";

export const RepDiv = styled('div')(({ $isHighlighted, $isLogged }) => ({
  display: 'flex',
  flexDirection: 'row',
  border: $isHighlighted ? '1px solid black' : '0px',
}))

export const RepNum = styled('h3')(({ $isLogged }) => ({
  color: $isLogged ? 'green' : 'black'
}));