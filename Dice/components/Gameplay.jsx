import styled from "styled-components"
import { Score } from "./Score"
import { Number } from "./Number"
import { Diceroll } from "./Diceroll"
import { useState } from "react"
import { Button, OutlineButton } from "./Button"
import { Rules } from "./Rules"

const Gameplay = () => {
  const[score,setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const[error, seterror] = useState();
  const[rules,setrules] = useState(false);

  const generaterandomnum = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber){
      seterror("You have not selected any number");
      return;
   }
   seterror(" ");
    
    const randomnumber = generaterandomnum(1, 7);
    setcurrentdice((prev) => randomnumber);
    if (selectedNumber === randomnumber) {
      setscore((prev)=>prev+1) }
     else{
       setscore((prev)=>prev-2);
    }
    setcurrentdice(randomnumber);
    setselectedNumber(undefined);
  };
  
  const reset = () => {
    setscore(0);
  }
 

  return (
    <Container>
      <div className="top-section">
      <Score score={score}/>
      <Number  error = {error} seterror = {seterror} selectedNumber= {selectedNumber} setselectedNumber = {setselectedNumber}/>
      </div>
      <Diceroll currentdice = {currentdice} roleDice= {roleDice}/>
      <div className="btns">
      <OutlineButton onClick={reset}>Reset Game</OutlineButton>
        <Button onClick={()=>setrules((prev)=>!prev)}>Show Rules</Button>
      </div>
      <div className="rules">
        {rules && <Rules/>}
      </div>
      
    </Container>
  )
}



const Container = styled.div`
display: flex;
flex-direction: column;
.rules{
 display: flex;
 justify-content: center;
 margin-top:40px;
}

.btns{
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;
}
  .top-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export default Gameplay