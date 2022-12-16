import React, { useState } from 'react';

import style from './newtodo.module.css';

const NewTodo = () => {
  const [todo, setTodo] = useState({ title: '', desc: '' });

  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;

    setTodo((oldTodo) => {
      return {...oldTodo, [name]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style['form-field']}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className={style['form-field']}>
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default NewTodo;
