import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CheckBox, ListItem } from 'react-native-elements'

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class Todo extends Component {
  render() {
    let { onClick, completed, text } = this.props
    let completeStyle = completed ? { name: "done", color: "green" } : { name: "work" }
    return (
      <ListItem 
        title={text}
        rightIcon={completeStyle}
        onPressRightIcon={onClick}
      />
    )
  }
}

const style = StyleSheet.create({
  todo: {
    flexDirection: "row"
  }
});

export default Todo