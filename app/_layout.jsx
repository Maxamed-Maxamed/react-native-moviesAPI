import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

export default function _layout  () {
  return (
    <View style={styles.container}>
      <Text>Movies API</Text>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})