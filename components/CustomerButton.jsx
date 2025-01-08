import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { isLoading } from 'expo-font'

const CustomerButton = ({title, textStyle, handlePress, containerStyle, isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary-200 rounded-xl 
    ${containerStyle}
        justify-center items-center
        ${isLoading && 'opacity-50'}
        `}
        disabled={isLoading}>
    
    <Text className={`text-primary font-psemibold text-lg  ${textStyle}`}> 
        {title}
    </Text>
      
    </TouchableOpacity>
  )
}

export default CustomerButton