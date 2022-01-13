import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, ADD_TEXT } from "../actionsType";

const initialState = {
    todos: [],
}

const todos = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TEXT: {

            return { ...state, text: action.payload }
        }

        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                todos: [
                    ...state.todos,
                    { content, completed: false, id }
                ]
            }
        }

        case TOGGLE_TODO: {

            const { id } = action.payload;
            const todos = state.todos.map(item => {
                return item.id === id ? { ...item, completed: !item.completed } : item
            });
            return { todos }
        }

        case EDIT_TODO: {
        
            const updatedTodos = state.todos.map((todo) => {
                
                if(todo.id === action.payload.id.id) {
                    return {...todo, content: action.payload.id.content }
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
            }
        }
        
        // eslint-disable-next-line
        case DELETE_TODO: {
            
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id ? todo : '')
        };
        // eslint-disable-next-line
        default: {
            return state;
        }
    }
}

export default todos;