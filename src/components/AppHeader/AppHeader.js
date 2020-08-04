import React, { Component } from 'react'
import CategoryList from './CategoryList'
import ProgressBar from './ProgressBar'
import AddNewCategory from './AddNewCategory'
import logo from '../../assets/stepout.svg'

export default class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="container-header">
          <img src={logo} className="logo" alt="logo" />
          <div className="header-label">To-do List</div>
          <div className="category-list">
            <CategoryList />
            <AddNewCategory />
          </div>
        </div>
        <div className="container-progress-bar">
          <ProgressBar />
        </div>
      </div>
    )
  }
}
