import React from 'react';

import Todos from './Todos';
import NewTodo from './NewTodo';
import style from './home.module.css';

const dummyTodos = [
  {
    id: 1,
    title: 'todo title-1',
    desc: 'todo-1 description is here .......',
  },
  {
    id: 2,
    title: 'todo title-2',
    desc: 'todo-2 description is here .......',
  },
];

const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Welcome To My ToDo App</h1>

      <NewTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
