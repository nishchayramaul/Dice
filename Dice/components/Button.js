import styled from "styled-components";

export const Button = styled.button `
all: unset;
width: 220px;
height: 44px;
padding: 10px, 18px, 10px, 18px;
border-radius: 10px;
background: #000000;
color: white;
text-align: center;
border: none;
font-size: 16px;
border: none;

&:hover{
  background-color: white;
  color: #000000;
  border :1px solid black;
}
`
export const OutlineButton = styled.button `
all: unset;
width: 220px;
height: 44px;
padding: 10px, 18px, 10px, 18px;
border-radius: 10px;
background: white;
color: black;
text-align: center;
border: none;
font-size: 16px;
border :1px solid black;

&:hover{
  background-color: black;
  color: white;
  border :none;
}`
