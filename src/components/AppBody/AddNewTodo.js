import React, { Component } from 'react'
import { reset, Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {
  editTodo,
  createTodo,
  fetchCategories,
  fetchTodos,
} from '../../actions'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import AddNewCategory from '../AppHeader/AddNewCategory'

class AddNewTodo extends Component {
  state = { show: false, category: null, categoryColor: null }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  setCat = (category, categoryColor) => {
    this.setState({ category, categoryColor })
    this.setState({ show: !this.state.show })
  }

  renderNameInput = ({ input, placeholder }) => {
    return (
      <input
        className="form-control-plaintext input-align"
        placeholder={placeholder}
        {...input}
      />
    )
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

  onSubmit = (formValues, dispatch) => {
    this.props.createTodo(formValues, this.state.category)

    dispatch(reset('newTodo'))
  }

  render() {
    console.log(this.state)
    console.log(this.props.categories)
    console.log(this.props.todos[this.props.todos.length - 1])
    return (
      <div>
        <Button
          className="primary"
          style={{ backgroundColor: `${this.state.categoryColor}` }}
          onClick={this.handleShow}
          value={this.state.categoryColor}
        ></Button>
        <div className="inline form-group ml-2 w-75">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Modal show={this.state.show} onHide={this.handleShow} centered>
              <Modal.Body>
                {this.renderCategoryOption()}
                <AddNewCategory />
              </Modal.Body>
            </Modal>
            <Field
              name="name"
              component={this.renderNameInput}
              placeholder="What's needed to be done?"
            />
          </form>
        </div>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.name) {
    errors.name = 'You have not put in any new task'
  }

  return errors
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
    todos: Object.values(state.todos),
    initialValues: { category: state.category },
  }
}

const formWrap = reduxForm({
  form: 'newTodo',
  validate,
})(AddNewTodo)

export default connect(mapStateToProps, {
  createTodo,
  fetchCategories,
  fetchTodos,
  editTodo,
})(formWrap)
