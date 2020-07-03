import React from 'react'
import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'

const AppBody = (props) => {
  return (
    <div>
      <AddNewTodo />
      <TodoList />
    </div>
  )
}

export default AppBody
