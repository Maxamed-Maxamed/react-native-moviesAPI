// import {  ScrollView, Text, View , Image} from 'react-native';
// import React from 'react';
// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// // Import your global CSS file
// import "../global.css";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { images } from "../constants";


// const Index = () => {
//   return (
//     <SafeAreaView className='bg-primary h-full'>

//       <ScrollView contentContainerStyle={{ height: '100%' }}>

//         <View className='w-full justify-center items-center h-full px-4'>

//           <Image 
//           source= {images.logo}
//           className='w-[130px] h-[84px]'
//           resizeMode='contain'
//           />

//           <Image
//           source= {images.cards}
//           className='max-w-[380px] w-full h-[300px]'
//           resizeMode='contain'
//           />

//           <View className="relative mt-5 justify-center items-center">
//             <Text className="text-3xl font-bold text-white justify-center items-center">
//               Discover Endless Possibilities with
//               <Text className="text-secondary-200"> Aora</Text>
//             </Text>
//           </View>
          
    
        
    

         

//         </View>
//         </ScrollView>
//       </SafeAreaView>
//   );
// };

// export default Index;




import { ScrollView, Text, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex-1 justify-center items-center px-4">

          <Image 
            source={images.logo} 
            className="w-[130px] h-[84px]" 
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className= "relative mt-3 justify-center items-center">
          <Text className="text-3xl font-bold text-white text-center">
           Discover Endless Possibilities with {""}
          <Text className="text-secondary-200"> Aora</Text>
        </Text>
          </View>

          <StatusBar style="light" />

         
       

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
