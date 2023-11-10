// import { useState } from 'react'
import './App.css';
import { TodoForm, TodoList } from './ui/components';

function App() {

  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <div className='container-lg row m-0'>
        <div className='col-lg-4 col-12 todo-form'>
          <TodoForm />
        </div>
        <div className='col-lg-8 col-12 todo-list'>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
