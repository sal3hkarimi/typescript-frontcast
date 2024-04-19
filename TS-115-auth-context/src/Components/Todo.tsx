import React from "react";
import { Todo as TodoType } from "./Todos.types";

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({
  id,
  title,
  isComplete,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color,
    fontSize: "3.5rem",
  };

  return (
    <li style={styles}>
      <h2>
        {title} - {isComplete === true ? "✅" : "❌"}
      </h2>
    </li>
  );
};

export default Todo;
