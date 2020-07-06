import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div>{this.props.todosLeft} tasks left</div>
          <Button onClick={() => this.props.showComponent('TodoList')}>
            ALL
          </Button>
          <Button onClick={() => this.props.showComponent('NotCompletedTodos')}>
            ONGOING
          </Button>
          <Button onClick={() => this.props.showComponent('CompletedTodos')}>
            COMPLETED
          </Button>
        </nav>
      </div>
    )
  }
}
