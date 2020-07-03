import React from 'react'
import CategoryList from './CategoryList'
import ProgressBar from './ProgressBar'
const AppHeader = () => {
  return (
    <div className="container">
      <h1>To-do List</h1>
      <CategoryList />

      <ProgressBar />
    </div>
  )
}

export default AppHeader
