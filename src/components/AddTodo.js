import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        dispatch(addTodo(value))
        setValue('');
    }

    const inputHandler = e => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <form className="form-submit" onSubmit={submitHandler}>
            <input className="input-todo" type="text" onChange={inputHandler} value={value} placeholder="What to do?" />
            <button className="add-btn" type="submit" disabled={!value}>
            <span className="material-icons-outlined">add</span>
            </button>
        </form>
    )
}
