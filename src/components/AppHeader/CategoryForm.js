import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CategoryBox from '../AppBody/CategoryBox'
import categoryCheck from '../../assets/category-check.svg'

//Form Validation
const required = (value) => (value ? undefined : 'Required')
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

class CategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = { color: null }

    this.handleChange = this.handleChange.bind(this)
  }

  renderCategoryInput = ({ input, label }) => {
    return (
      <div className="name-field">
        <div className="input-label">{label}</div>
        <input
          className="form-control-plaintext add-category-input"
          {...input}
        />
      </div>
    )
  }

  renderColorInput = ({ input, label }) => {
    return (
      <div className="color-field">
        <div className="input-label">{label}</div>
        <div
          className="color-display"
          style={{
            backgroundColor: `${this.state.color}`,
            border: `2.5px solid ${this.state.color}`,
          }}
        ></div>
        <CategoryBox
          propStyle={{ height: '25px', width: '25px', marginRight: '18px' }}
        />
        <CategoryBox
          propStyle={{ height: '25px', width: '25px', marginRight: '18px' }}
        />
        <CategoryBox
          propStyle={{ height: '25px', width: '25px', marginRight: '18px' }}
        />
        <CategoryBox
          propStyle={{ height: '25px', width: '25px', marginRight: '15px' }}
        />

        <input
          className="form-control-plaintext color-input"
          {...input}
          placeholder="#"
        />
      </div>
    )
  }

  handleChange(e) {
    this.setState({ color: e.target.value })
    console.log(this.state)
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
            component={this.renderCategoryInput}
            label="CATEGORY NAME"
            validate={[required, maxLength15]}
          />
          <Field
            name="color"
            component={this.renderColorInput}
            label="CATEGORY COLOR"
            validate={[required]}
            onChange={this.handleChange}
          />

          <button className="submit-button" type="submit">
            <img src={categoryCheck} alt="category-check" />
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'categoryForm',
})(CategoryForm)
