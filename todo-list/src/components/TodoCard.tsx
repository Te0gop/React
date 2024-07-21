import React, { PropsWithChildren } from "react";

interface Props {
  children: string;
  handleDeleteTodo: (item: number) => void;
  index: number;
}
// think about this any type of props
export default function TodoCard(props: any) {
  console.log(props);
  
  const { children, handleDeleteTodo, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i className="fa solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => { handleDeleteTodo(index)}}>
          <i className="fa regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
