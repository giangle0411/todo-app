import React, { Component } from 'react'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { createCategory } from '../../actions'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import CategoryForm from './CategoryForm'
import add from '../../assets/plus-solid.svg'

class AddNewCategory extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  handleClose = (dispatch) => {
    this.setState({ show: false })
    reset('newCategory')
  }

  onSubmit = (formValues, dispatch) => {
    this.props.createCategory(formValues)
    this.handleClose()
  }

  render() {
    return (
      <div className="add-category">
        <img src={add} alt="add" onClick={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            <CategoryForm onSubmit={this.onSubmit} />
            <Button
              className="mr-3"
              variant="secondary"
              onClick={this.handleShow}
            >
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(null, { createCategory })(AddNewCategory)
