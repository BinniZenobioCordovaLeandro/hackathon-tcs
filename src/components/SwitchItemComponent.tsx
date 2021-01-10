import React, { Component } from 'react'
import { Linking, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View, Switch } from './Themed'

interface dataItem {
  title: string
  link?: string
}

export interface Props {
  title: string
  handleOnValueChange: object
  value?: boolean
  styleContainer?: object
  data?: Array<dataItem>
}
export interface State {
  width: number
  height: number
}

export default class SwitchItemComponent extends Component<Props, State> {
  render() {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <Switch
          style={styles.switch}
          value={this.props.value}
          onValueChange={(value) => {
            if (typeof this.props.handleOnValueChange === 'function') this.props.handleOnValueChange(value)
          }}
        />
        <Text style={styles.text}>
          {this.props.title}
          {
            (this.props.data) ? (
              this.props.data.map((item, index) => {
                if (item.link) {
                  return (
                    <TouchableWithoutFeedback key={`data_${index}`} onPress={() => Linking.openURL(item.link || '')}>
                      <Text style={styles.textLink}>
                        {item.title}
                      </Text>
                    </TouchableWithoutFeedback>
                  )
                } else {
                  return (
                    <Text key={`data_${index}`} style={styles.text}>
                      {item.title}
                    </Text>
                  )
                }
              })
            ) : (
                null
              )
          }
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
  switch:{

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
