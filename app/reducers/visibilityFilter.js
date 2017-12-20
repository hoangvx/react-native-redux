import {
  SET_VISIBILITY_FILTER
} from '../actions/types'

/**
 * 次のフィルター返す
 * @param state // 現在のフィルターキー
 * @param action // actions/index.jsから
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
