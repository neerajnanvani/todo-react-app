import React from "react";

const Todo = (props) => {
  return (
    <div className="border border-primary p-3 card text-center">
      <h5 className="card-title">{props.todo.title}</h5>
      <p className="card-text">{props.todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => props.deleteTodo(props.todo)}
      >
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};

export default Todo;
