import { useEffect, useState } from "react";
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

  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });

    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  function persistData(newList: string[]) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  useEffect(() => {
    if(!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    
    if(!localTodos) {
      return
    }

    let arr: string[] = JSON.parse(localTodos).todos;    
    setTodos(arr);
  }, []);

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}  />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
    </>
  );
}

export default App;
