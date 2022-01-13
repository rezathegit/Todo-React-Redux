import React from 'react'
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from '../redux/selector';
import { Todo } from './Todo';



export const TodoList = () => {
    const { todos, visibilityFilter } = useSelector(state => state)
    // console.log(todos);

const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter)

    return (
        <div className="todo-list">
            {filterTodos.length ? filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo} />
            )): <p className="notodoyet">Nothing to do yet!</p>}
           
        </div>
    )
}
