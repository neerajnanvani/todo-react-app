import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";

import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "Go to office",
      desc: "Leave The house and go to office"
    },
    {
      title: "Go to Lunck",
      desc: "Leave The seat and go to canteen" 
    }, 
    {
      title: "Go to Home",
      desc: "Leave The office and go to home"
    }
  ]);

  const deleteTodo = (todo) => {
    console.log(todo);

    setTodoList(todoList.filter((temp) => temp.sno !== todo.sno ));
  }

  const addTodo = (title, desc) => {
    console.log(title, desc)

    setTodoList([...todoList, {title, desc}])
  }
  
  return (
    <>
      <Header title="This is A Todo app" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todoList} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;
