/**
 * 利用する変数をインポートする
 */
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './types'

let nextTodoId = 0

/**
 * タスク追加エベント
 * @param {string} text 
 */
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

/**
 * フィルターする
 * @param {filter} filter 
 */
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

/**
 * タスクのステータス変更
 * @param {number} id 
 */
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
