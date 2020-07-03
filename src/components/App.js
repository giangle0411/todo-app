import React, { Component } from 'react'
import AppHeader from './AppHeader/AppHeader'
import AddNewTodo from './AppBody/AddNewTodo'
import TodoList from './AppBody/TodoList'
import CompletedTodos from './CompletedTodos'
import NotCompletedTodos from './NotCompletedTodos'
import AppFooter from './AppFooter/AppFooter'

export default class App extends Component {
  state = { component: 'TodoList' }

  renderComponent() {
    switch (this.state.component) {
      case 'TodoList':
        return <TodoList />
      case 'CompletedTodos':
        return <CompletedTodos />
      case 'NotCompletedTodos':
        return <NotCompletedTodos />
      default:
        return <div>No todos found</div>
    }
  }

  showComponent = (componentName) => {
    this.setState({ component: componentName })
  }

  renderButton() {
    return (
      <div>
        <button onClick={() => this.showComponent('TodoList')}>TodoList</button>
        <button onClick={() => this.showComponent('CompletedTodos')}>
          CompletedTodos
        </button>
        <button onClick={() => this.showComponent('NotCompletedTodos')}>
          NotCompletedTodos
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <AppHeader />
        <AddNewTodo />
        {this.renderComponent()}
        <AppFooter />
        {this.renderButton()}
      </div>
    )
  }
}
