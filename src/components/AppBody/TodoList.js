import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, editTodo, deleteTodo } from '../../actions'
import TodoItem from './TodoItem'
import AppFooter from '../AppFooter'

class TodoList extends Component {
  state = { component: 'TodoList' }

  showComponent = (componentName) => {
    this.setState({ component: componentName })
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  renderComponent() {
    switch (this.state.component) {
      case 'TodoList':
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
      case 'NotCompletedTodos':
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
    return (
      <div>
        {this.renderComponent()}
        <AppFooter showComponent={this.showComponent} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps, { fetchTodos, editTodo, deleteTodo })(
  TodoList
)
