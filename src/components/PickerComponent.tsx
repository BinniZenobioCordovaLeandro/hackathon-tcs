import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View, PickerSelect } from './Themed'

export interface Props {
  items: object
  handleOnValueChange: object
  styleContainer?: object
  value?: number
}
export interface State {
  width: number
  height: number
}
export default class PickerComponent extends Component<Props, State> {
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
        style={[styles.container, { paddingHorizontal: this.state.width ? this.state.width * 0.05 : undefined }, this.props.styleContainer]}
        onLayout={(event) => {
          var { width, height } = event.nativeEvent.layout;
          if (!this.state.width) this.setState({ width, height })
        }}
      >
        <PickerSelect
          onValueChange={(value) => {
            if (typeof this.props.handleOnValueChange === 'function') this.props.handleOnValueChange(value)
          }}
          value={this.props.value}
          items={this.props.items}
          darkColor={Colors.dark.background}
          lightColor={Colors.light.background}
          style={{
            inputAndroidContainer: {
              height: this.state.height ? this.state.height * 0.90 : undefined,
              width: this.state.width ? this.state.width * 0.90 : undefined,
              justifyContent: 'center',
              alignContent: 'center'
            },
            inputAndroid: {
              height: this.state.height ? this.state.height * 0.90 : undefined,
              width: this.state.width ? this.state.width * 0.90 : undefined,
              ...styles.text
            },
            inputIOSContainer: {
              height: this.state.height ? this.state.height * 0.90 : undefined,
              width: this.state.width ? this.state.width * 0.90 : undefined,
              justifyContent: 'center',
              alignContent: 'center',
            },
            inputIOS: {
              height: this.state.height ? this.state.height * 0.90 : undefined,
              width: this.state.width ? this.state.width * 0.90 : undefined,
              ...styles.text
            },
            inputWeb: {
              height: this.state.height ? this.state.height * 0.90 : undefined,
              width: this.state.width ? this.state.width * 0.90 : undefined,
              borderWidth: 0,
              ...styles.text
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.light.borderColor
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular'
  }
})
