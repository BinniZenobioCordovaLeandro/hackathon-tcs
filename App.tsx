import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, StyleSheet, Text, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const [containerWidth, setContainerWidth] = useState(0)

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <View
        style={styles.container}
        onLayout={(event) => {
          var { width } = event.nativeEvent.layout;
          if (!containerWidth) setContainerWidth(width)
        }}
      >
        {
          (!(Platform.OS === 'android' || Platform.OS === 'ios')) ? (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
              <Text>hellow</Text>
            </View>
          ) : (
              null
            )
        }
        <SafeAreaProvider style={(Platform.OS === 'android' || Platform.OS === 'ios') ? { flex: 1 } : { maxWidth: 640 }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})