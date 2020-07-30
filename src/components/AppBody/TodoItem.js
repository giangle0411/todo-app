import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../../actions'
import DeleteTodo from './DeleteTodo'
import Modal from 'react-bootstrap/Modal'
import CategorySelect from '../Modals/CategorySelect'
import AddNewCategory from '../AppHeader/AddNewCategory'
import CategoryBox from '../AppBody/CategoryBox'

class TodoItem extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  setCat = (category, categoryColor) => {
    this.props.editTodo(this.props.todoItem.id, { category, categoryColor })
    this.setState({ show: !this.state.show })
  }

  renderCategoryOption = () => {
    return this.props.categories.map((cat) => {
      return (
        <CategorySelect
          key={cat.id}
          catItem={cat}
          name="category"
          value={cat.name}
          setCat={this.setCat.bind(this, cat.name, cat.color)}
        />
      )
    })
  }

  render() {
    const task = this.props.todoItem
    return (
      <div className="todo-item container">
        <input
          className="checkbox-round"
          type="checkbox"
          value={task.completed}
          checked={task.completed}
          onChange={(e) =>
            this.props.editTodo(task.id, {
              completed: !task.completed,
            })
          }
        />
        <CategoryBox
          handleShow={this.handleShow}
          propStyle={{
            backgroundColor: `${task.categoryColor}`,
            border: `2.5px solid ${task.categoryColor}`,
          }}
        />

        <Modal show={this.state.show} onHide={this.handleShow} centered>
          <Modal.Body>
            {this.renderCategoryOption()}
            <AddNewCategory />
          </Modal.Body>
        </Modal>
        <div className="task-name">{task.name}</div>
        <DeleteTodo id={task.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
  }
}
export default connect(mapStateToProps, { editTodo })(TodoItem)
