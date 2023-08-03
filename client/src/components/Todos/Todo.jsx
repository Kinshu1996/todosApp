import React, { useState } from 'react'
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import { toggleTodo, updateTodo, deleteTodo } from '../../redux/actions'
import { useDispatch } from 'react-redux'



const Todo = ({ todo }) => {

  const dispatch = useDispatch();
  const[editing, setEditing] = useState(false);
  const[text, setText] = useState(todo.data)
 const onFormSubmit = (e) => {
  e.preventDefault();
  setEditing(prevState => !prevState);
  dispatch(updateTodo(todo._id, text));
 }
  return (
    <li className='task'
    onClick={() => dispatch(toggleTodo(todo._id))}
    style={{
      textDecoration: todo.done ? "line-through" : "",
      color: todo.done ? "#bdc3c7" : "#34495e"
    }}
    >
        <span style={{display: editing ? "none" : ""}}>{todo.data}</span>
        <form style={{display: editing ? "inline" : "none"}} onSubmit={onFormSubmit}>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='edit-todo' />
        </form>
        <span className='icon' onClick={() => dispatch(deleteTodo(todo._id))}>
            <AiFillDelete />
        </span>
        <span className='icon' onClick={() => setEditing(prevState => !prevState)}>
            <AiFillEdit />
        </span>
    </li>
  )
}

export default Todo
