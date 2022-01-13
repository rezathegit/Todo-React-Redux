import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import './App.css';

function App() {
  return (
    <div className="App">
     
    <h1 className="app-title">Redux- Todo App</h1>
    <AddTodo />
    <VisibilityFilter />
    <TodoList />
    </div>
  );
}

export default App;
