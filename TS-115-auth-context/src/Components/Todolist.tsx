import React, { useEffect, useRef } from "react";
import Todo from "./Todo";

import { Todo as TodoType } from "./Todos.types";

type TodolistProps = {
  todos: TodoType[];
};

const Todolist: React.FC<TodolistProps> = ({ todos }) => {
  const elem = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (elem.current) {
      // elem.current.focus()
      elem.current.value;
    }

    elem.current?.value;
  }, []);

  return (
    <>
      <input type="text" placeholder="Todo Title ..." ref={elem} />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Todolist;
