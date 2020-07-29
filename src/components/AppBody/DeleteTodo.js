import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { deleteTodo } from '../../actions'
import { connect } from 'react-redux'
import bin from '../../assets/trash-solid.svg'
import ModalButton from '../Modals/ModalButton'

class DeleteTodo extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="bin-wrapper">
        <img src={bin} className="bin" alt="bin" onClick={this.handleShow} />
        <Modal
          dialogClassName="modal-delete"
          show={this.state.show}
          onHide={this.handleShow}
          centered
        >
          <Modal.Body>
            <div className="modal-main-content">
              <ModalButton
                content="Delete this task?"
                backgroundColor="#ff3838"
                color="#ffffff"
                action={this.props.deleteTodo.bind(this, this.props.id)}
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

export default connect(null, { deleteTodo })(DeleteTodo)
