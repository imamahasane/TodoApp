import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos';
import NewTodo from './NewTodo';
import style from './home.module.css';

/* const dummyTodos = [
  {
    id: 1,
    title: 'Professional_Profile',
    desc: 'CV link (Google Drive) and Profile image link',
  },
  {
    id: 2,
    title: 'Congratulations Message',
    desc: 'Wishing you a bright and colorful future in which all your dreams come true.',
  },
]; */

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos((prevTodos) => {
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Welcome Your ToDo App</h1>

      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
