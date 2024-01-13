
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
export  const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src = "dices 1.png" alt='Dice picture'/>
      </div>
    <div className='content'> 
      <h1 > Dice Game</h1>
      <Button onClick={toggle}>Play Game</Button>
    </div>
    </Container>
  )
}
Startgame.propTypes = {
  toggle: PropTypes.func.isRequired,
};
const Container = styled.div `
 display: flex;
 max-width: 1280px;
 align-items: center;
 height: 100vh;
 margin: auto 0;
 margin-left: 10%;

img{
  height: 520;
  width: 640px;
}

.content{
  height: 1180;
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
h1{
  font-size: 96px;
  white-space: nowrap;
} 
}

`
const Button = styled.button `
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
