import React, { Component } from 'react'
import TodoList from './AppBody/TodoList'
import AddNewTodo from './AppBody/AddNewTodo'

export default class AllTodos extends Component {
  render() {
    return (
      <div className="all-todos container-mdm">
        <AddNewTodo />
        <TodoList list="AllTodos" />
      </div>
    )
  }
}
