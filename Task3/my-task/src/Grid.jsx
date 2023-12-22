import React from 'react';
import Cell from './Cell';

const Grid = ({position}) => {
  const gridData =[0,1,2,3,4]
  
  return (
    <div className="grid-container">
        {gridData.map(row => (
          <div key={row} className="grid-row ">
            {gridData.map(col => (
              <Cell key={`${row},${col}`} x={row} y={col} position={position}/>
            ))}
          </div>
        ))}
        
      </div>
    
  );

};


export default Grid;
