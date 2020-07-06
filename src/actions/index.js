import todo from '../apis/todos'
import {
  CREATE_TODO,
  FETCH_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from './types'

export const createTodo = (formValues, category, categoryColor) => async (
  dispatch
) => {
  const completed = false
  const response = await todo.post('/todo', {
    ...formValues,
    category,
    categoryColor,
    completed,
  })
  dispatch({ type: CREATE_TODO, payload: response.data })
}

export const fetchTodos = () => async (dispatch) => {
  const response = await todo.get('/todo')
  dispatch({ type: FETCH_TODOS, payload: response.data })
}

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todo.patch(`/todo/${id}`, formValues)
  dispatch({ type: EDIT_TODO, payload: response.data })
}

export const deleteTodo = (id) => async (dispatch) => {
  await todo.delete(`/todo/${id}`)
  dispatch({ type: DELETE_TODO, payload: id })
}

export const createCategory = (formValues) => async (dispatch) => {
  const response = await todo.post('/category', { ...formValues })
  dispatch({ type: CREATE_CATEGORY, payload: response.data })
}

export const fetchCategories = () => async (dispatch) => {
  const response = await todo.get('/category')
  dispatch({ type: FETCH_CATEGORIES, payload: response.data })
}

export const editCategory = (id, formValues) => async (dispatch) => {
  const response = await todo.patch(`/category/${id}`, formValues)
  dispatch({ type: EDIT_CATEGORY, payload: response.data })
}

export const deleteCategory = (id) => async (dispatch) => {
  await todo.delete(`/category/${id}`)
  dispatch({ type: DELETE_CATEGORY, payload: id })
}
