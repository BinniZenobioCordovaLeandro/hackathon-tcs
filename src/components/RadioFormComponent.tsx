import React, { Component } from 'react'
import { Linking, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'


export interface Props {
  title: string
  handleOnPress: object
  value?: boolean
  styleContainer?: object
}
export interface State {
  width: number
  height: number
}

export default class RadioFormComponent extends Component<Props, State> {
  render() {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <TouchableWithoutFeedback onPress={() => {
          if (typeof this.props.handleOnPress === 'function') this.props.handleOnPress()
        }}>
          <View style={[styles.radioButton, { borderColor: Colors.light.tint }]}>
            <View style={this.props.value ? [styles.radioButtonActive, { backgroundColor: Colors.light.tint }] : undefined} />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 56
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  radioButtonActive: {
    width: 15,
    height: 15,
    borderRadius: 15
  },
  text: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  textLink: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    textDecorationLine: 'underline'
  }
})
