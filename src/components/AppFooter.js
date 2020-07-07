import React, { Component } from 'react'
export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <div className="navbar fixed-bottom navbar-light bg-light align-self-center">
          <div className="todos-left">{this.props.todosLeft} tasks left</div>
          <div className="navWrap">
            <div
              id="todochange"
              tabIndex="0"
              className="todos-change"
              onClick={() => this.props.showComponent('TodoList')}
            >
              ALL
            </div>
            <div
              id="todochange"
              tabIndex="0"
              className="todos-change"
              onClick={() => this.props.showComponent('NotCompletedTodos')}
            >
              ONGOING
            </div>
            <div
              id="todochange"
              tabIndex="0"
              className="todos-change"
              onClick={() => this.props.showComponent('CompletedTodos')}
            >
              COMPLETED
            </div>
          </div>
        </div>
      </div>
    )
  }
}
