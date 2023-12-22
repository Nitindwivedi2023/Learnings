import React, { useState } from 'react';
import Modal from 'react-modal';

const Task = () => {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1);
        } else {
            openModal()
        }
    };

    const decrement = () => {
        if (count > -5) {
            setCount(count - 1);
        } else {
            openModal()
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const reset = () => {
        setCount(0)
    };
    const closeModal = () => {
        setIsModalOpen(false);
        reset();
    };
        const customStyles = {
            content: {
              width: '150px', // Adjust the width as needed
              height: '100px', // Adjust the height as needed
              margin: 'auto',
              background:'black',
            },
          };
    return(
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        >
        <p>Limit reached : {count}</p>
        <button onClick={closeModal} style ={{background:"#61dafb" }}>Reset</button>
    </Modal>   
    </div> 
  ); 
};

export default Task;