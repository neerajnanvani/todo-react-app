import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import React from "react";

import { useState, useEffect } from "react";

function App() {
  let tempTodos = [];

  const localStorageTodos = localStorage.getItem("todos");
  if (localStorageTodos) {
    tempTodos = JSON.parse(localStorageTodos);
  }

  const [todoList, setTodoList] = useState(tempTodos);

  const deleteTodo = (todo) => {
    console.log(todo);

    const sampleList = todoList.filter((temp) => temp.title !== todo.title);
    setTodoList(sampleList.map((todo, index) => ({ ...todo, sNo: index + 1 })));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);

    setTodoList([...todoList, { title, desc, sNo: todoList.length }]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <Header title="Add Your Todo's" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todoList} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;
