import React from 'react'
import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'

const AppBody = () => {
  return (
    <div className="container">
      <AddNewTodo />
      <TodoList />
    </div>
  )
}

export default AppBody
