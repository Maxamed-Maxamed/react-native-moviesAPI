import { ScrollView, Text, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import CustomerButton from '../components/homecustomer/CustomerButton';
import { Redirect, router } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {/* <View className="flex-1 justify-center items-center px-4"> */}
      <View className="
      w-full justify-center items-center min-h-[85vh] px4
      ">  
          {/* Logo Image */}
          <Image 
            source={images.logo} 
            className="w-[130px] h-[84px]" 
            resizeMode="contain"
          />

          {/* Card Image */}
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          {/* Text and Path Image */}
          <View className="relative  justify-center items-center">
            <Text className="text-3xl font-bold text-white text-center">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute-bottom-2 -right-8 "  resizeMode='contain'/>
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-4"> 
          Where creativity meets innovation: embark on a journey of limitless exploration with Aora.
          </Text>

        {/* Buttons */} 
        <CustomerButton 
        title="Get Started"
        containerStyle="w-full h-[50px] mt-4"
        buttonStyle={`bg-secondary-200 rounded-lg`}
        textStyle="text-primary font-psemibold text-lg"
        

  
        handlePress={() => router.push('/sign-in' , console.log("Get Started"))}
 
        />
          
          

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style={ 'light' }      
      />
    </SafeAreaView>
  );
};

export default Index;

