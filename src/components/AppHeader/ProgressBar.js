import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../actions'

class ProgressBar extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const allTodos = this.props.todos
    const completed = allTodos.filter((t) => t.completed === true)
    const percentage = (completed.length / allTodos.length) * 100

    console.log(percentage)

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: '#00000',
      marginTop: 20,
    }

    const fillerStyles = {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: '#F77062',
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
    }
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${percentage.toFixed(0)}%`}</span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps, { fetchTodos })(ProgressBar)
