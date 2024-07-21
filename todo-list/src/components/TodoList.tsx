import React, { PropsWithChildren } from "react";
import TodoCard from "./TodoCard";

interface Props {
  todos: string[];
  handleDeleteTodo: (item: number) => void;
}

export default function TodoList(props: Props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
