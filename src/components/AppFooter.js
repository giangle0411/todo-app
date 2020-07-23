import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class AppFooter extends Component {
  render() {
    return (
      <div className="navbar fixed-bottom navbar-light bg-light align-self-center">
        <div className="todos-left">{this.props.todosLeft} tasks left</div>
        <div className="nav-buttons">
          <NavLink
            to="/"
            id="todochange"
            activeStyle={{
              background: '#f77062',
              cursor: 'pointer',
              color: 'white',
              textDecoration: 'none',
            }}
            exact
            className="nav-item"
          >
            ALL
          </NavLink>
          <NavLink
            to="/incompleted"
            id="todochange"
            activeStyle={{
              background: '#f77062',
              cursor: 'pointer',
              color: 'white',
              textDecoration: 'none',
            }}
            exact
            className="nav-item"
          >
            ONGOING
          </NavLink>
          <NavLink
            to="/completed"
            id="todochange"
            activeStyle={{
              background: '#f77062',
              cursor: 'pointer',
              color: 'white',
              textDecoration: 'none',
            }}
            exact
            className="nav-item"
          >
            COMPLETED
          </NavLink>
        </div>
      </div>
    )
  }
}
