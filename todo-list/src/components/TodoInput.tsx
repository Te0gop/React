import { useState } from "react";

interface Props {
  todoValue: string;
  handleAddTodos: (item: string) => void;
  setTodoValue: (item: string) => void;
}

export default function TodoInput(props: Props) {
  
  return (
    <header>
      <input
        value={props.todoValue}
        onChange={(e) => {
          props.setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button onClick={() => {
        props.handleAddTodos(props.todoValue)
        props.setTodoValue('')
      }}>Add</button>
    </header>
  );
}
