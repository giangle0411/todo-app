import React, { Component } from 'react'
import { reset, Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCategory } from '../../actions'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'

class AddNewCategory extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  handleClose = (dispatch) => {
    this.setState({ show: false })
    this.props.dispatch(reset('newCategory'))
  }

  renderNewCategoryInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input className="form-control" {...input} />
      </div>
    )
  }

  onSubmit = (formValues, dispatch) => {
    this.props.createCategory(formValues)
    this.handleClose()
  }

  render() {
    return (
      <div className="inline ml-3">
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
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
                <button
                  type="submit"
                  disabled={this.props.pristine}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
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
