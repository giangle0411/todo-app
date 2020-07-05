import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import { deleteCategory } from '../../actions'
import { connect } from 'react-redux'

class DeleteCategory extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="inline">
        <Button variant="primary" onClick={this.handleShow}>
          Delete
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Body>
            <Button
              className="mr-3"
              variant="secondary"
              onClick={this.handleShow}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => this.props.deleteCategory(this.props.id)}
            >
              Delete this category?
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(null, { deleteCategory })(DeleteCategory)
