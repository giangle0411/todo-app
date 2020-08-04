import React, { Component } from 'react'
import TodoList from './AppBody/TodoList'
import AddNewTodo from './AppBody/AddNewTodo'

export default class CompletedTodos extends Component {
  render() {
    return (
      <div className="completed-todos container-body">
        <AddNewTodo />
        <TodoList list="CompletedTodos" />
      </div>
    )
  }
}
