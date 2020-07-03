import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, editTodo } from '../../actions'

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  onSubmit = (formValues) => {}

  renderList() {
    return this.props.todos.map((todo) => {
      const check = todo.completed
      console.log(check)
      return (
        <div key={todo.id}>
          <ul className="list-group-flush">
            <li className="list-group-item">
              <input
                className="mr-2"
                type="checkbox"
                value={todo.completed}
                checked={todo.completed}
                onChange={(e) => this.setState({})}
              />
              {todo.name}

              <button className="btn-xs btn-primary">Delete</button>
            </li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}
const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps, { fetchTodos, editTodo })(TodoList)
