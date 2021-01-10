import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View, TextInput } from './Themed'

export interface Props {
  handleOnChangeText: object
  placeholder?: string
  value?: string
  styleContainer?: object
  keyboardType?: string
}
export interface State {
  width: number
  height: number
}

export default class TextInputComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    return (
      <View
        darkColor={Colors.dark.background}
        lightColor={Colors.light.background}
        style={[styles.container, this.props.styleContainer]}
        onLayout={(event) => {
          var { width, height } = event.nativeEvent.layout;
          if (!this.state.width) this.setState({ width, height })
        }}
      >
        <TextInput
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType || 'default'}
          value={this.props.value}
          style={{ flex: 1, position: 'relative', paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined }}
          onChangeText={(text) => {
            if (typeof this.props.handleOnChangeText === 'function') this.props.handleOnChangeText(text)
          }}
        />
        {
          (this.props.value) ? (
            <Text style={[styles.text, { paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined }]}>
              {this.props.placeholder}
            </Text>
          ) : (
            <View />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.light.borderColor
  },
  text: {
    position: 'absolute',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    top: 0,
    left: 0
  }
})
