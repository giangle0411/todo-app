import React, { Component } from 'react'

export default class CategoryBox extends Component {
  render() {
    return (
      <div
        className="category-box"
        style={this.props.propStyle}
        onClick={this.props.handleShow}
      ></div>
    )
  }
}
