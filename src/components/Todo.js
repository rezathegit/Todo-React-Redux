import React from 'react'
import { useDispatch } from 'react-redux';
import { addText, deleteTodo, toggleTodo, editTodo } from '../redux/actions';
import { useEffect, useState } from 'react';

export const Todo = ({ todo }) => {

    const [checked, setChecked] = useState(false);

    const deleteTodoHandler = () => dispatch(deleteTodo(todo.id));

    const dispatch = useDispatch();

    const checkedHandler = () => dispatch(toggleTodo(todo.id));

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(todo.content);

    const editContentHandler = e => { setEditContent(e.target.value) };
    const toggleEditing = () => setIsEditing(!isEditing);

    const editHandler = e => {
        
        e.preventDefault();

        dispatch(editTodo({
            id: todo.id,
            content: editContent,
            completed: todo.completed,
        }));
    
        e.target.children[0].value = editContent.value
        toggleEditing()
    }

    const addTextHandler = () => dispatch(addText(todo.value));

    useEffect(() => {
        setChecked(todo.completed)
    }, [todo])

    const [deleteButtonVisible, setDeleteButtonVisible] = useState('none');
    const [orderInTheList, setOrderInTheList] = useState('none');

    useEffect(() => {
        // eslint-disable-next-line
        todo.completed ? setDeleteButtonVisible('block') : setDeleteButtonVisible('none');
        // eslint-disable-next-line
        todo.completed ? setOrderInTheList(1) : setOrderInTheList(0);
    }, [todo.completed]);

    return (

        <div onClick={addTextHandler} className="todo" style={{ order: orderInTheList }}>

            {!isEditing &&
                <> <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.content}</li>

                    <button type="button" className="done-btn" onClick={checkedHandler} checked={checked} >
                        <span className="material-icons-outlined">check</span>
                    </button>

                    <button onClick={deleteTodoHandler} type="button" className="delete-btn" style={{ display: deleteButtonVisible }}>
                        <span className="material-icons-outlined">delete_forever</span>
                    </button>

                    <button onClick={toggleEditing} type="button" className="edit-btn">
                        <span className="material-icons-outlined">edit_note</span>
                    </button> </>
            }
            {isEditing &&

                <form className="form-submit" onSubmit={editHandler}>
                    <input className="input-todo" type="text" onChange={editContentHandler} value={editContent} />
                    <button className="add-btn" type="submit" >
                        <span className="material-icons-outlined">add_circle_outline</span>
                    </button>
                </form>
            }
        </div>
    )
}