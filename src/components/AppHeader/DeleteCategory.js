import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import { deleteCategory } from '../../actions'
import { connect } from 'react-redux'
import ModalButton from '../Modals/ModalButton'

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
        <Modal
          dialogClassName="modal-delete"
          show={this.state.show}
          onHide={this.handleShow}
          centered
        >
          <Modal.Body>
            <div className="modal-main-content">
              <ModalButton
                content="Delete this category?"
                backgroundColor="#ff3838"
                color="#ffffff"
                action={this.props.deleteCategory.bind(this, this.props.id)}
              />
              <ModalButton
                className="button-close"
                content="Cancel"
                backgroundColor="ffffff"
                color="#ff3838"
                action={this.handleShow}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(null, { deleteCategory })(DeleteCategory)
