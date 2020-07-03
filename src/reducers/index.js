import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import todoReducer from './todoReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
  form: formReducer,
  todos: todoReducer,
  categories: categoryReducer,
})
