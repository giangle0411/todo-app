import React, { Component } from 'react'
import TodoList from './AppBody/TodoList'
import AddNewTodo from './AppBody/AddNewTodo'

export default class AllTodos extends Component {
  render() {
    return (
      <div>
        <AddNewTodo />
        <TodoList list="AllTodos" />
      </div>
    )
  }
}
