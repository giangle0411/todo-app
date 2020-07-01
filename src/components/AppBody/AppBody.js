import React from 'react'
import TaskList from './TaskList'
import AddNewTodo from './AddNewTodo'

const AppBody = (props) => {
  return (
    <div>
      <AddNewTodo />
      <TaskList todos={props.todos} />
    </div>
  )
}

export default AppBody
