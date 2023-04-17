import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='container'>
     <h3 className='text-center'>
        The Todo List
        </h3> 
        { props.todos.length ? 
            props.todos.map((todo, index) => {
               return <Todo todo={todo} key={index} deleteTodo={props.deleteTodo} />
            }) : 
            <p> No todos to display </p>
        }
      
    </div>
  )
}

export default Todos
