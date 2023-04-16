import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='container'>
     <h3 className='text-center'>
        The Todo List
        </h3> 
        {
            props.todos.map((todo) => {
               return <Todo todo={todo} />
            })
        }
      
    </div>
  )
}

export default Todos
