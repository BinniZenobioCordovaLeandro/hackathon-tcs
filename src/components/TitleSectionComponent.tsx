import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export interface Props {
  title: string
  styleContainer?: object
}
export interface State { }

export default class TitleSectionComponent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular'
  },
})
