import React, { useState } from 'react'

const AddTodo = (props) => {

    const submit = (e) => {
        e.preventDefault();

        if(!title || !desc) {
            alert("Please fill both title and Description")
        }
        else {
            props.addTodo(title, desc);
        }
    }

  const [title, setTitle] =  useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className='container'>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
  </div>
 
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
