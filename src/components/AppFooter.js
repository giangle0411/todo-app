import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div>{this.props.todosLeft} tasks left</div>
          <Button onClick={() => this.props.showComponent('TodoList')}>
            TodoList
          </Button>
          <Button onClick={() => this.props.showComponent('CompletedTodos')}>
            CompletedTodos
          </Button>
          <Button onClick={() => this.props.showComponent('NotCompletedTodos')}>
            NotCompletedTodos
          </Button>
        </nav>
      </div>
    )
  }
}
