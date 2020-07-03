import _ from 'lodash'
import {
  CREATE_TODO,
  FETCH_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  SET_COMPLETED,
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_TODO:
      return _.omit(state, action.payload)
    case SET_COMPLETED:
      return { ...state, completed: !state.completed }
    default:
      return state
  }
}
