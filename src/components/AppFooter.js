import React, { Component } from 'react'
import { Button } from 'reactstrap'
export default class AppFooter extends Component {
  render() {
    return (
      <div className="container-mdm">
        <nav className="navbar fixed-bottom navbar-light bg-light align-self-center">
          <div className="todos-left">{this.props.todosLeft} tasks left</div>
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
