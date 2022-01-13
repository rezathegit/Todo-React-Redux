import { createStore } from 'redux';
import rootReducer from './reducer';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash.throttle';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));
export default store;