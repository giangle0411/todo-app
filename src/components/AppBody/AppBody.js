import React, { Component } from 'react'
import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'

export default class AppBody extends Component {
  render() {
    return (
      <div className="container mt-3">
        <AddNewTodo />
        <TodoList />
      </div>
    )
  }
}
