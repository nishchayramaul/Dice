
import styled from "styled-components";

export const Diceroll = ({currentdice, roleDice}) => {
  

  return (
    <Dicecontainer>
      <div className="dice" onClick={roleDice}>
        <img src={`dice_${currentdice}.png`} alt={`dice${currentdice}`} />
      </div>
      <p>Click on the Dice roll</p>
    </Dicecontainer>
  );
};

const Dicecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`
