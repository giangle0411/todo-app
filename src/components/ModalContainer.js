import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export default class ModalContainer extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="inline ml-2" onClick={this.handleShow}>
        <Modal show={this.props.show} onHide={this.handleShow}>
          <Modal.Body>{this.props.content}</Modal.Body>
        </Modal>
      </div>
    )
  }
}
