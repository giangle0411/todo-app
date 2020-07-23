import React, { Component } from 'react'
import CategoryList from './CategoryList'
import ProgressBar from './ProgressBar'
import AddNewCategory from './AddNewCategory'

export default class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <h1>To-do List</h1>
        <div className="category-list">
          <CategoryList />
          <AddNewCategory />
        </div>
        <ProgressBar />
      </div>
    )
  }
}
