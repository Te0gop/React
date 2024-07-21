import { useState } from "react";

interface Props {
//   todoValue: string;
  handleAddTodos: (item: string) => void;
}

export default function TodoInput(props: Props) {
  const [todoValue, setTodoValue] = useState("");
  
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button onClick={() => {
        props.handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  );
}
