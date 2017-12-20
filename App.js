import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';

export default class App extends Component {
  render() {
    let todos = [
      { id: 1, title: "create some actions" },
      { id: 2, title: "create some reducer" },
      { id: 3, title: "create store" }
    ];
    return (
      <View style={styles.container}>
        <FlatList>
        </FlatList>
        <View>
          <TextInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
