import React, { useEffect, useState } from "react";

import "./App.css";
import Todolist from "./Components/Todolist";
import { Todo } from "./Components/Todos.types";
import Counter from "./Components/Counter";
import { ThemeContextProvider } from "./context/ThemeContext";
import Header from "./Components/Header";
import { AuthContextProvider } from "./context/Auth/AuthContext";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: crypto.randomUUID(),
      title: "Learn Js",
      isComplete: true,
      color: "green",
    },
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      isComplete: false,
      color: "red",
    },
    {
      id: crypto.randomUUID(),
      title: "Learn Ts",
      isComplete: false,
      color: "blue",
    },
  ]);

  const [loading, setLoading] = useState<string>("true");

  useEffect(() => {
    // setLoading(false)
  }, []);

  return (
    <>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </>
  );
};

export default App;
