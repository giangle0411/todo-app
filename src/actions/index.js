import todo from '../apis/todos'
import { CREATE_TODO, FETCH_TODOS, DELETE_TODO, EDIT_TODO } from './types'

export const createTodo = (formValues) => async (dispatch) => {
  const completed = false
  const response = await todo.post('/todo', { ...formValues, completed })
  dispatch({ type: CREATE_TODO, payload: response.data })
}

export const fetchTodos = () => async (dispatch) => {
  const response = await todo.get('/todo')
  dispatch({ type: FETCH_TODOS, payload: response.data })
}

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todo.put(`/todo/${id}`, formValues)
  dispatch({ type: EDIT_TODO, payload: response.data })
}

export const deleteTodo = (id) => async (dispatch) => {
  await todo.delete(`/todo/${id}`)
  dispatch({ type: DELETE_TODO, payload: id })
}
