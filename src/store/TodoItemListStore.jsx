import React, { useReducer, createContext } from "react";

export const TodoListStore = createContext(
  {
    allItems : [],
    AddNewItems: () => {},
    handleDelete: () => {},
  }
);

function TodoItemListStore({children}) {

  const reducerList = (currentState, action) => {
  
    let newItemList = currentState;
   
    if (action.type === "ADD_LIST") {
      newItemList =  [...currentState,action.payload.listName];
    } 
    else if (action.type === "DEL_LIST") {
      newItemList = currentState.filter((list) => list != action.payload.itemName);}

    return newItemList;
  };

  const [allItems, dispatch] = useReducer(reducerList, []);

  function addNewItems(listName) {
    dispatch({type: "ADD_LIST", payload: { listName },});
  };

  const handleDelete = (itemName) => {
    dispatch({type: "DEL_LIST", payload: { itemName },});
  };

  return (
    <TodoListStore.Provider value={{allItems, addNewItems, handleDelete}}>
      { children }
    </TodoListStore.Provider>
  );
}

export default TodoItemListStore;
