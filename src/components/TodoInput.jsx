import React, { useContext, useRef } from "react";
import {TodoListStore} from '../store/TodoItemListStore'

function TodoInput() {
  const {addNewItems} = useContext(TodoListStore);
  const refElementVal = useRef();
  
  function handleOnClick(e) {
    e.preventDefault();
    const refval = refElementVal.current.value;
    refElementVal.current.value = '';
    addNewItems(refval);
  }

  return (
      <form onSubmit={handleOnClick} className="input-container">
      <input
        type="text"
        placeholder="Enter your todo..."
        ref={refElementVal}
      />
      <button >Add</button>
    </form>
  );
}

export default TodoInput;
