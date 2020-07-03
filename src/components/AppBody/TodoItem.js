import React from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo } from '../../actions'

 const TodoItem = (props) => {
    const check = props.todoItem.completed
    console.log(check)
    console.log(props)
    return (
      <div>
        <ul className="list-group-flush">
          <li className="list-group-item">
            <input
              className="mr-2"
              type="checkbox"
              value={props.todoItem.completed}
              checked={props.todoItem.completed}
              onChange={(e) => props.editTodo(props.todoItem.id, {"completed": !check})}
            />
            {props.todoItem.name}

            <button className="btn-xs btn-primary" onClick={e=> props.deleteTodo(props.todoItem.id)} >Delete</button>
          </li>
        </ul>
      </div>
    )
}



export default connect(null, { editTodo, deleteTodo })(TodoItem)
  