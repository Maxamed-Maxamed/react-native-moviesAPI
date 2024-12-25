import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
// Import your global CSS file
import "../global.css";
const Rooylayout = () => {
  return (

    <Stack> 
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>


  )

}

export default Rooylayout