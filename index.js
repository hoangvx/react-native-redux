import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './app/store'

// MainContainerを利用するため
import MainComponent from './app/components/Main'

/**
 * Provideを使ってreduxとreact連携する
 */
const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
}

AppRegistry.registerComponent('todolist', () => App);
