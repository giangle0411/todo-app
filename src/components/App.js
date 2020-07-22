import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AllTodos from './AllTodos'
import CompletedTodos from './CompletedTodos'
import IncompletedTodos from './IncompletedTodos'
import AppHeader from './AppHeader/AppHeader'

export default class App extends Component {
  render() {
    return (
      <div className="container-mdm">
        <AppHeader />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={AllTodos} />
            <Route path="/completed" exact component={CompletedTodos} />
            <Route path="/incompleted" exact component={IncompletedTodos} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
