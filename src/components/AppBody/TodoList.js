import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, editTodo, deleteTodo } from '../../actions'
import TodoItem from './TodoItem'

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todoItem={todo} />
    })
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
