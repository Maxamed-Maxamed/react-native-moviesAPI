import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the app!</Text>
      <Link href="/profile" style= {{fontSize: 20, color: "blue"}} >go to Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});