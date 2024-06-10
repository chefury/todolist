import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
      console.log('Restored todos from localStorage:', storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  return (
    <div>
      <Header />
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
