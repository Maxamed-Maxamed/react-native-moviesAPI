import { Text , TouchableOpacity} from 'react-native'
import React from 'react'

const CustomerButton = ({title, textStyle, handlePress, containerStyle, isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary-200 rounded-lg
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