import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';

const App = () =>
{
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    });

    setTasks(newTasks)
  };

  const handleTaskAddition = (tastkTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: tastkTitle,
        id: uuid4(),
        completed: false
      },
    ];

    setTasks(newTasks)
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return  (
    <Router>
      <div className='container'>
        <Header />
        <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
};

export default App;