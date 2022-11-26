import { useState } from 'react'
import '../index.css'
import Home from './Home'
import Game from './Game'

function App() {

  const [isHome, setIsHome] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);

  const activateGame = event => {
    setIsHome(current => !current);
  };

  const addPageCounter = event => {
    setPageCounter(current => current + 1);
  }
  
  if (isHome) {
    return (
      <div>
        <Home activeGame={activateGame} />
      </div>
    )
  }
  else {
    return (
      <div>
        <Game counter={pageCounter} addPageCounter={addPageCounter}/>
      </div>
    )
  }

}

export default App