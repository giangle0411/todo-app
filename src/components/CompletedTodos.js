import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import TodoItem from '../components/AppBody/TodoItem'

class CompletedTodos extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return this.props.todos.map((todo) => {
      if (todo.completed === true) {
        return <TodoItem key={todo.id} todoItem={todo} />
      }
      return null
    })
  }
}
const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps, { fetchTodos })(CompletedTodos)
