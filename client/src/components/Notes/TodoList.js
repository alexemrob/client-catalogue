import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { toast } from "react-toastify";
import './style.css'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
    toast('FOURRR FOR U GLEN COCO U GO GLEN COCO <3', { type: "success" });
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <div className="post-its">
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      </div>
    </>
  );
}

export default TodoList;