import styled from "styled-components"

export const Score = ({score}) => {
  return (
    <Scorebox>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Scorebox>
  )
}

const Scorebox = styled.div `
    
    height: 90px;
    width: 135px;
    text-align: center;
    margin-left:40px;
    h1{
        font-size: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500px;

    }
`