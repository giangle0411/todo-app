import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCategory, deleteCategory } from '../../actions'
import DeleteCategory from './DeleteCategory'
import Modal from 'react-bootstrap/Modal'
import CategoryForm from './CategoryForm'
import _ from 'lodash'

class CategoryItem extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  handleClose = (dispatch) => {
    this.setState({ show: false })
  }

  onSubmit = (formValues, dispatch) => {
    this.props.editCategory(this.props.catItem.id, formValues)
    this.handleClose()
  }

  render() {
    return (
      <div className="inline">
        <button
          type="button"
          className="btn cat-item"
          onClick={this.handleShow}
          style={{
            backgroundColor: `${this.props.catItem.color}`,
            color: 'white',
          }}
        >
          {this.props.catItem.name}
        </button>
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            <CategoryForm
              onSubmit={this.onSubmit}
              initialValues={_.pick(this.props.catItem, 'name', 'color')}
            />
            <DeleteCategory id={this.props.catItem.id} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
export default connect(null, { editCategory, deleteCategory })(CategoryItem)
