import {  Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// Import your global CSS file
import "../global.css";

const Index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack' >Aora!</Text>
      <Link href="/profile" className='text-red-500' >go to Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
};

export default Index;

