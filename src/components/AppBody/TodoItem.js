import React from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo } from '../../actions'
import DeleteTodo from './DeleteTodo'

const TodoItem = (props) => {
  const check = props.todoItem.completed

  return (
    <div>
      <ul className="list-group-flush">
        <li className="list-group-item">
          <input
            className="mr-2"
            type="checkbox"
            value={props.todoItem.completed}
            checked={props.todoItem.completed}
            onChange={(e) =>
              props.editTodo(props.todoItem.id, { completed: !check })
            }
          />
          {props.todoItem.name}

          <DeleteTodo id={props.todoItem.id} />
        </li>
      </ul>
    </div>
  )
}

export default connect(null, { editTodo, deleteTodo })(TodoItem)
