
import styled from "styled-components"

export const Number = ({error,seterror,selectedNumber,setselectedNumber}) => {
    const arr = [1,2,3,4,5,6];

    const numberSelectorHandler =(value) => {
      setselectedNumber(value);
      seterror(" ");
    }
  return (
    <NumberSelectorContainer> 
      <p id = "error">{error}</p>
    <div className="flex">
     {
     arr.map((value,i) =>(
        <Box 
        isSelected = { selectedNumber === value}
        key = {i}
        onClick={()=>{numberSelectorHandler(value)}}> 
        {value}
        </Box>
     ))
    }
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-right:120px;
margin-top:100px;
.flex{
  display: flex;
  gap: 24px;
}

p{
  font-size:24px;
}
#error{
  color: #fb5151;
  padding-bottom: 10px;
}
`


const Box = styled.div `

height: 72px;
width: 72px;
border: 1px solid black;
place-items: center;
display: grid;
font-size: 24px;
font-weight: 700;

background-color: ${(props)=> props.isSelected ? "black" : " white"};
color: ${(props)=> props.isSelected ? "white" : " black"};
`