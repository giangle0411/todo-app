import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'reactstrap'
import { deleteTodo } from '../../actions'
import { connect } from 'react-redux'
import bin from '../../assets/trash-solid.svg'

class DeleteTodo extends Component {
  state = { show: false }

  handleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="inline">
        <img src={bin} alt="bin" className="bin" onClick={this.handleShow} />
        <Modal
          dialogClassName="modal-size"
          show={this.state.show}
          onHide={this.handleShow}
          centered
        >
          <Modal.Body>
            <div>
              <Button
                className="mr-3"
                variant="secondary"
                onClick={this.handleShow}
              >
                Close
              </Button>
            </div>
            <Button
              variant="primary"
              onClick={(e) => this.props.deleteTodo(this.props.id)}
            >
              Delete this task?
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(null, { deleteTodo })(DeleteTodo)
