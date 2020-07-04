import React, { Component } from 'react'
import { reset, Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCategory } from '../../actions'

class AddNewCategory extends Component {
  renderNewCategoryInput = ({ input, placeholder, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input className="form-control" placeholder={placeholder} {...input} />
      </div>
    )
  }

  onSubmit = (formValues, dispatch) => {
    this.props.createCategory(formValues)
    dispatch(reset('newCategory'))
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <Field
            name="name"
            component={this.renderNewCategoryInput}
            label="Category name"
          />
          <Field
            name="color"
            component={this.renderNewCategoryInput}
            label="Category color"
          />
          <button className="btn btn-primary">Submit</button>
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

const formWrap = reduxForm({
  form: 'newCategory',
  validate,
})(AddNewCategory)

export default connect(null, { createCategory })(formWrap)
