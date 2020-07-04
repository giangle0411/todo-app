import React, { Component } from 'react'
import AppHeader from './AppHeader/AppHeader'
import AppBody from './AppBody/AppBody'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <AppBody />
      </div>
    )
  }
}
