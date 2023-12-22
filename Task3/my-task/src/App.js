import logo from './logo.svg';
import './App.css';
import Grid from './Grid';
import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const move = (x, y) => {
    if ((position.x+x)==3 && (position.y+y)==3 || (position.x+x)==1 && (position.y+y)==1){
      alert("Can't move to this position")
      return
    }
    if ( position.x + x < 0 || position.y+y < 0 || position.y+y >= 5 || position.x+x >= 5) {

        alert("Can't move outside the grid");
        return 
     // Return the current position if moving outside the grid
    }else{
    console.log('Move successful. New position:', position);
    // return newPosition; // Return the new position
    setPosition({ x: position.x + x, y: position.y + y });
  };
  };
  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        move(-1, 0);
        break;
      case 'ArrowDown':
        move(1, 0);
        break;
      case 'ArrowLeft':
        move(0, -1);
        break;
      case 'ArrowRight':
        move(0, 1);
        break;
      default:
        break;
    }
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return (
    <div className="App">
      <Grid position={position}></Grid>
      <div>
      <br></br>
      <button onClick={() => move(-1, 0)}>Upper</button>
      <br></br>
      <button className="left" onClick={() => move(0, -1)}>
        Left
      </button>
      <button className="right" onClick={() => move(0, 1)}>
        Right
      </button>
      <br></br>
      <button className="down" onClick={() => move(1, 0)}>
        Down
      </button>
      </div>
      <br></br>
    </div>
    
  );
}

export default App;
