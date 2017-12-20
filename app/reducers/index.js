import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * Reducerコンパイル
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp