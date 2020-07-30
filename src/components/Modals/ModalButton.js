import React, { Component } from 'react'

export default class ModalButton extends Component {
  render() {
    return (
      <div
        className="modal-button"
        style={{
          backgroundColor: `${this.props.backgroundColor}`,
          color: `${this.props.color}`,
          marginBottom: `${this.props.marginBottom}`,
        }}
        onClick={(e) => {
          this.props.action()
        }}
      >
        <div className="modal-button-content">{this.props.content}</div>
      </div>
    )
  }
}
