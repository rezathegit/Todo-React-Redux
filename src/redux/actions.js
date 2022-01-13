import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, EDIT_TODO, ADD_TEXT } from "./actionsType";

export const addTodo = content => ({
type: ADD_TODO,
payload: {
    id: Date.now(),
    content
}
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});

export const editTodo = id => ({
    type: EDIT_TODO,
    payload: { id }
});

export const addText = value => ({
    type: ADD_TEXT,
    payload:value
});