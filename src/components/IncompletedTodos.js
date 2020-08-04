import React, { Component } from 'react'
import TodoList from './AppBody/TodoList'
import AddNewTodo from './AppBody/AddNewTodo'

export default class IncompletedTodos extends Component {
  render() {
    return (
      <div className="incompleted-todos container-body">
        <AddNewTodo />
        <TodoList list="IncompletedTodos" />
      </div>
    )
  }
}
