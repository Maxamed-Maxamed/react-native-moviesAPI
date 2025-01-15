import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full  border-0 border-b-2 border-gray-500 flex-row"> 
      <Text className="text-base text-gray-100 font-pmedium bg-gray-600 px-3 py-3 flex-row">{title}</Text>
      <View className="space-x-2  px-3 py-3 rounded-2xl bg-orange-200 flex-row"> 
        <TextInput
          className="flex-1 text-white font-psemibold text-base bg-orange-200 rounded-2xl"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 "
              resizeMode="contain"
              tintColor="#7B7B8B"
            />
          </TouchableOpacity>
        )}
      </View>
      </View>
    </View>
  );
};

export default FormField;