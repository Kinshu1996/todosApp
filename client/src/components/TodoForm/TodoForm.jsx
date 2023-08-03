import React, { useState } from "react";
import "./TodoForm.scss";
import { addNewTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {

    const[text, setText] = useState("")
    const dispatch = useDispatch();
    

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text))
        setText("");
    }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
      placeholder="Enter new todo..." 
      className="input" 
      onChange={onInputChange}
      value={text}
      />
    </form>
  );
};

export default TodoForm;
