import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../actions'
import TodoItem from './TodoItem'

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  renderComponent() {
    switch (this.props.list) {
      case 'AllTodos':
        return this.props.todos.map((todo) => {
          return <TodoItem key={todo.id} todoItem={todo} />
        })
      case 'CompletedTodos':
        return this.props.todos.map((todo) => {
          if (todo.completed === true) {
            return <TodoItem key={todo.id} todoItem={todo} />
          }
          return null
        })
      case 'IncompletedTodos':
        return this.props.todos.map((todo) => {
          if (todo.completed === false) {
            return <TodoItem key={todo.id} todoItem={todo} />
          }
          return null
        })
      default:
        return <div>No todos found</div>
    }
  }

  render() {
    return <div className="todo-list">{this.renderComponent()}</div>
  }
}
const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps, { fetchTodos })(TodoList)
