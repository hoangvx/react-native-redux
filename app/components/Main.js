// 必要なリソース追加する
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform
} from 'react-native';

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

class MainContainer extends Component {
  render() {
    // この部分はビューをレンダーです。
    return (
      <View style={styles.container}>
        <VisibleTodoList />
        <AddTodo />
      </View>
    );
  }
}

// ビューのスタイル修正
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#1D9FF2"
  }
});

// このContainerを利用できるためエクスポートします
export default MainContainer;
