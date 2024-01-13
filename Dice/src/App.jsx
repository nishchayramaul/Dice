
import { useState } from 'react'
import { Startgame } from '../components/Startgame'
import './App.css'
import Gameplay from '../components/Gameplay';


function App() {
  const [isgamestarted,setisgamestarted] = useState(false);

  const togglegameplay = () =>{
    setisgamestarted((prev)=>(!prev))
  }
  return (
  <div className="app">{isgamestarted ? <Gameplay/> : <Startgame toggle = {togglegameplay}/>}</div>
  );
}

export default App
