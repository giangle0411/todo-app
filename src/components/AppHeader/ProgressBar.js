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

    const fillerStyles = {
      width: `${percentage}%`,
    }

    return (
      <div className="progress-container">
        <div className="progress-bar" style={fillerStyles}>
          <span className="progress-label">
            {`${percentage.toFixed(0)}%`} Completed
          </span>
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
