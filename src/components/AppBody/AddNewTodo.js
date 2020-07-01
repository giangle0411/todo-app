import React, { Component } from 'react'
import { reset, Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createTodo } from '../../actions'

class AddNewTodo extends Component {
  renderNewTodoInput = ({ input, placeholder }) => {
    return (
      <div className="field">
        <input
          className="form-control-plaintext"
          placeholder={placeholder}
          {...input}
        />
      </div>
    )
  }

  onSubmit = (formValues, dispatch) => {
    this.props.createTodo(formValues)
    dispatch(reset('newTodo'))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field
            name="name"
            component={this.renderNewTodoInput}
            placeholder="What's needed to be done?"
          />
        </div>
      </form>
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

const formWrap = reduxForm({
  form: 'newTodo',
  validate,
})(AddNewTodo)

export default connect(null, { createTodo })(formWrap)
