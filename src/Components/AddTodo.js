import React, { useState } from "react";

const AddTodo = (props) => {
  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Please fill both title and Description");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="container mt-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Todo Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            autoComplete="off"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
