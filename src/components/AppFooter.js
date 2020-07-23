import React, { Component } from 'react'
export default class AppFooter extends Component {
  render() {
    return (
      <div className="navbar fixed-bottom navbar-light bg-light align-self-center">
        <div className="todos-left">{this.props.todosLeft} tasks left</div>
      </div>
    )
  }
}
