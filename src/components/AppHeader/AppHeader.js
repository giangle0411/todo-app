import React from 'react'
import CategoryList from './CategoryList'
import ProgressBar from './ProgressBar'
import AddNewCategory from './AddNewCategory'

const AppHeader = () => {
  return (
    <div className="container">
      <h1>To-do List</h1>
      <CategoryList />
      <AddNewCategory />
      <ProgressBar />
    </div>
  )
}

export default AppHeader
