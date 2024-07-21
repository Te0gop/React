import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more clean",
    "Pick up kid from kindergarden",
  ]);

  function handleAddTodos(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });

    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}  />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
