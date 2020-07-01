import React from 'react'
const TaskList = (props) => {
  const td = JSON.stringify(props.todos)
  console.log({ td })

  const listTodos = props.todos.map((task) => (
    <div className="round" key={task.id}>
      <ul className="list-group-flush">
        <li className="list-group-item">
          <input
            className="mr-2"
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          {task.name}
        </li>
      </ul>
    </div>
  ))
  return <div>{listTodos}</div>
}

export default TaskList
