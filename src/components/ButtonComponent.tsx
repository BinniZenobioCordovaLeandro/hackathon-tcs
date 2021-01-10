import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export interface Props { 
  title: string
  handleOnPress: object
  styleContainer?: object
}
export interface State {
  width: number
  height: number
}

export default class ButtonComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={()=> {
          if(typeof this.props.handleOnPress === 'function' ) this.props.handleOnPress()
        }}>
        <View
          darkColor={Colors.dark.tint}
          lightColor={Colors.light.tint}
          style={[styles.container, {paddingHorizontal: this.state.width ? this.state.width * 0.35 : undefined}, this.props.styleContainer]}
          onLayout={(event) => {
            var {width, height} = event.nativeEvent.layout;
            if (!this.state.width) this.setState({width, height})
          }}
        >
          <Text
            darkColor={Colors.light.text}
            lightColor={Colors.dark.text}
            style={styles.text}
          >
              {this.props.title}
            </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 4
  },
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-Bold'
  }
})
