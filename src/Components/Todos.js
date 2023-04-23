import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <>
      <h5 className="text-center my-4">The Todo List</h5>
      <div className="container">
        <div className="row g-3 align-items-center">
          {props.todos.length ? (
            props.todos.map((todo, index) => {
              return (
                <div className="col-4">
                  <Todo todo={todo} key={index} deleteTodo={props.deleteTodo} />
                </div>
              );
            })
          ) : (
            <p> No todos to display </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Todos;
