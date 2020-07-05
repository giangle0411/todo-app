import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class CategoryForm extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input className="form-control" {...input} />
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field
            name="name"
            component={this.renderInput}
            label="Category name"
          />
          <Field
            name="color"
            component={this.renderInput}
            label="Category color"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.name) {
    errors.name = 'You have not put in any new category'
  }
  if (!formValues.color) {
    errors.name = 'You have not put in any category color'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate,
})(CategoryForm)
