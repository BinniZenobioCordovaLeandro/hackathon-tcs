import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export interface Props { 
  title: string
  titlePrimary?: string
  description?: string
  styleContainer?: object
}
export interface State { }

export default class TitleComponent extends Component<Props, State> {
  render () {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <Text
          lightColor={Colors.light.tint}
          darkColor={Colors.dark.tint}
          style={[styles.textTitlePrimary]}
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            style={[styles.textTitle]}
          >
            {this.props.title}
          </Text>
          {this.props.titlePrimary ? this.props.titlePrimary : ''}
        </Text>
        {
          (this.props.description) && (
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.text}
              style={[styles.textDescription]}
            >
              {this.props.description}
            </Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    fontSize: 32,
    fontFamily: 'OpenSans-Regular'
  },
  textTitlePrimary: {
    fontSize: 32,
    fontFamily: 'OpenSans-Regular'
  },
  textDescription: {
    paddingTop: 8,
    fontSize: 18,
    fontFamily: 'OpenSans-Regular'
  }
})
