import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {TodoListStore} from '../store/TodoItemListStore'

function TodoList({ item }) {
  const { handleDelete } = useContext(TodoListStore);

  return (
    <li className="listItems">
      {item}
      <span>
        <MdDelete onClick={() => handleDelete(item)} />
      </span>
    </li>
  );
}

export default TodoList;
