import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCategory, deleteCategory } from '../../actions'
import DeleteCategory from './DeleteCategory'
import Modal from 'react-bootstrap/Modal'
import CategoryForm from './CategoryForm'
import _ from 'lodash'

class CategoryItem extends Component {
  state = { show: false, hover: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  onSubmit = (formValues) => {
    this.props.editCategory(this.props.catItem.id, formValues)
    this.handleClose()
  }

  render() {
    let styleBackground
    if (this.state.hover) {
      styleBackground = {
        backgroundColor: `${this.props.catItem.color}`,
        color: '#ffffff',
      }
    } else {
      styleBackground = {
        backgroundColor: 'white',
        color: 'black',
      }
    }
    return (
      <div className="category-item">
        <div
          className="category-container"
          onClick={this.handleShow}
          style={styleBackground}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <div
            className="category-label"
            style={{ backgroundColor: `${this.props.catItem.color}` }}
          ></div>
          <span className="category-name">{this.props.catItem.name}</span>
        </div>
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
