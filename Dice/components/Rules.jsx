import styled from "styled-components"

export const Rules = () => {
  return (
    <RulesContainer>
       
            <h1>How to play Dice Game</h1>
            <div className="text">
            <p>  Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`
    p{
        gap:4px;
    }
    background: #FBF1F1;
    max-width: 770px;
    padding: 20px;
   
`