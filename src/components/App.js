import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AllTodos from './AllTodos'
import CompletedTodos from './CompletedTodos'
import IncompletedTodos from './IncompletedTodos'
import AppHeader from './AppHeader/AppHeader'
import AppFooter from './AppFooter'
class App extends Component {
  render() {
    const todosLeft = this.props.todos.filter((t) => t.completed === false)
    return (
      <div className="">
        <AppHeader />
        <BrowserRouter>
          <Route path="/" exact component={AllTodos} />
          <Route path="/completed" exact component={CompletedTodos} />
          <Route path="/incompleted" exact component={IncompletedTodos} />
          <AppFooter todosLeft={todosLeft.length} />
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  }
}

export default connect(mapStateToProps)(App)
