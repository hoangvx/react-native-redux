import { connect } from 'react-redux'
import { toggleTodo, setVisibilityFilter } from '../actions'
import TodoList from '../components/TodoList'

/**
 * filter todos
 * @param todos 
 * @param filter 
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

/**
 * Redux: Map states to props
 * @param state 
 */
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

/**
 * Redux: Map actions to props
 * @param dispatch 
 */
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    filterTodos: filter => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

// Map props for TodoList
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList