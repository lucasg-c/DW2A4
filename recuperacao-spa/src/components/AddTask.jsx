import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';

var isValid;

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);

        if (!e.target.value || e.target.value === " ")
        {
            isValid = false;
        }
        else
        {
            isValid = true;
        }
    };

    const handleAddTaskClick = () => {
        if (isValid === true)
        {
            handleTaskAddition(inputData)
            setInputData('')
        }
    }

    return ( 
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange}
                value={inputData}
                className='add-task-input' 
                type="text" 
                // style={ isValid ? {} :  { outline: 'none !important', border: '1px solid red' } }
            />
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>    
    );
};
 
export default AddTask;