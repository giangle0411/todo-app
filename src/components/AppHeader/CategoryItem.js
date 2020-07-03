import React from 'react'
import { connect } from 'react-redux'
import { editCategory, deleteCategory } from '../../actions'

const CategoryItem = (props) => {
  return (
    <div className="inline" style={{ color: `${props.catItem.color}` }}>
      {props.catItem.name}
      <button
        className="btn-xs btn-primary"
        onClick={(e) => props.deleteCategory(props.catItem.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default connect(null, { editCategory, deleteCategory })(CategoryItem)
