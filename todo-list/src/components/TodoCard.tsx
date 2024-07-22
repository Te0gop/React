import React, { PropsWithChildren } from "react";

interface Props {
  children: string;
  handleDeleteTodo: (item: number) => void;
  handleEditTodo: (item: number) => void;
  index: number;
}
// think about this any type of props
export default function TodoCard(props: Props | any) {
  
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i onClick={() => { handleEditTodo(index) }} className="fa solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => { handleDeleteTodo(index)}}>
          <i className="fa regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
