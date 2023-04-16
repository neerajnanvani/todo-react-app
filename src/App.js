import "./App.css";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Todos from "./Components/Todos";



function App() {
  let todoList = [
    {
      sno: 1,
      title: "Go to office",
      desc: "Leave The house and go to office"
    },
    {
      sno: 2,
      title: "Go to Lunck",
      desc: "Leave The seat and go to canteen" 
    }, 
    {
      sno: 3,
      title: "Go to Home",
      desc: "Leave The office and go to home"
    }
  ]
  return (
    <>
      <Header title="This is A Todo app" />
      <Todos todos={todoList} />
      <Footer />
    </>
  );
}

export default App;
