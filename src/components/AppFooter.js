import React, { Component } from 'react'

export default class AppFooter extends Component {
  clickMe = (component) => {
    this.props.showComponent(component)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickMe('TodoList')}>TodoList</button>
        <button onClick={() => this.clickMe('CompletedTodos')}>
          CompletedTodos
        </button>
        <button onClick={() => this.clickMe('NotCompletedTodos')}>
          NotCompletedTodos
        </button>
      </div>
    )
  }
}
