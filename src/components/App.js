import React, { Component } from 'react'
import AppHeader from './AppHeader/AppHeader'
import AddNewTodo from './AppBody/AddNewTodo'
import TodoList from './AppBody/TodoList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <AddNewTodo />
        <TodoList />
      </div>
    )
  }
}
