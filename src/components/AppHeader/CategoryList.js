import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions'
import CategoryItem from './CategoryItem'

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return this.props.categories.map((cat) => {
      return <CategoryItem key={cat.id} catItem={cat} />
    })
  }
}
const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
  }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryList)
