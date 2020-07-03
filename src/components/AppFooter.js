import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class AppFooter extends Component {
  clickMe = (component) => {
    this.props.showComponent(component)
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div>{this.props.todosLeft} tasks left</div>
          <Button onClick={() => this.clickMe('TodoList')}>TodoList</Button>
          <Button onClick={() => this.clickMe('CompletedTodos')}>
            CompletedTodos
          </Button>
          <Button onClick={() => this.clickMe('NotCompletedTodos')}>
            NotCompletedTodos
          </Button>
        </nav>
      </div>
    )
  }
}
