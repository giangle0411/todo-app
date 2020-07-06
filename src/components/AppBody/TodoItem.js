import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo, fetchCategories } from '../../actions'
import DeleteTodo from './DeleteTodo'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import AddNewCategory from '../AppHeader/AddNewCategory'

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
        <Button
          name="category"
          value={cat.name}
          key={cat.id}
          style={{
            backgroundColor: `${cat.color}`,
            color: 'white',
          }}
          onClick={(e) => this.setCat(cat.name, cat.color)}
        >
          {cat.name}
        </Button>
      )
    })
  }

  render() {
    const task = this.props.todoItem
    return (
      <div>
        <ul className="list-group-flush">
          <li className="list-group-item">
            <input
              className="mr-2"
              type="checkbox"
              value={task.completed}
              checked={task.completed}
              onChange={(e) =>
                this.props.editTodo(task.id, {
                  completed: !task.completed,
                })
              }
            />
            <Button
              className="primary"
              style={{ backgroundColor: `${task.categoryColor}` }}
              onClick={this.handleShow}
            ></Button>
            <Modal
              dialogClassName="modal-size"
              show={this.state.show}
              onHide={this.handleShow}
              centered
            >
              <Modal.Body>
                {this.renderCategoryOption()}
                <AddNewCategory />
              </Modal.Body>
            </Modal>
            {task.name}

            <DeleteTodo id={task.id} />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
  }
}
export default connect(mapStateToProps, {
  editTodo,
  deleteTodo,
  fetchCategories,
})(TodoItem)
