import React ,{useContext} from 'react'
import { TodoListStore } from "../store/TodoItemListStore";
import TodoList from './TodoList'
import Message from './Message'

function CreationListItem() {
    const {allItems} = useContext(TodoListStore)

  return (
    <div> 
      {allItems.length === 0 && <Message/>}
      {allItems.map((item) => <TodoList key={item} item={item}/>)}
    </div>
  )
}

export default CreationListItem