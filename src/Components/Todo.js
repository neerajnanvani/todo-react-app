import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <h5>{props.todo.title}</h5>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger">Delete </button>
    </div>
  )
}

export default Todo
