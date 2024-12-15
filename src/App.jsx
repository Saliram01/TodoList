import "./App.css";
import CreationListItem from "./components/CreationListItem";
import TodoInput from "./components/TodoInput";
import TodoItemListStore, { TodoListStore } from "./store/TodoItemListStore";

function App() {
  
  return (
    <TodoItemListStore>
      <div className="main-container">
        <p className="title">Todo_List</p>
        <div className="center-container">
          <TodoInput />
          <CreationListItem/>
        </div>
      </div>
    </TodoItemListStore>
  );
}

export default App;
