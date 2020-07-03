import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, editTodo, deleteTodo } from '../../actions'
import TodoItem from './TodoItem'

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  onSubmit = (formValues) => {}

  renderList() {
    return this.props.todos.map((todo) => {
  
      return (
        <TodoItem key={todo.id} todoItem={todo} />
      )
    })
  }

  renderCompleted() {
    return this.props.todos.map((todo) => {
      if (todo.completed === true) {
        const check = todo.completed
        return (<div key={todo.id}>
          <ul className="list-group-flush">
            <li className="list-group-item">
              <input
                className="mr-2"
                type="checkbox"
                value={todo.completed}
                checked={todo.completed}
                onChange={(e) => this.props.editTodo(todo.id, {"completed": !check})}
              />
              {todo.name}

              <button className="btn-xs btn-primary" onClick={e=> this.props.deleteTodo(todo.id)} >Delete</button>
            </li>
          </ul>
        </div>)
      }
      return null
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

export default connect(mapStateToProps, { fetchTodos, editTodo, deleteTodo })(TodoList)
