import React, { Component } from 'react'

class CategorySelect extends Component {
  state = { hover: false }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
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
      <div className="category-select-item">
        <div
          className="category-container"
          style={styleBackground}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          onClick={(e) => {
            this.props.setCat()
          }}
        >
          <div
            className="category-label"
            style={{ backgroundColor: `${this.props.catItem.color}` }}
          ></div>
          <span className="category-name">{this.props.catItem.name}</span>
        </div>
      </div>
    )
  }
}
export default CategorySelect
