import React, { useState, useCallback } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const InputPassword: React.FC<TextInputProps> = (props: TextInputProps) => {
  const [secureText, setSecureText] = useState(true)

  const handleVisibleText = useCallback(() => {
    setSecureText(!secureText)
  }, [secureText])

  return (
    <View style={{
      justifyContent: 'center'
    }}>
      <TextInput
        secureTextEntry={secureText}
        {...props}/>
      <TouchableOpacity
        onPress={handleVisibleText}
        style={{
          position: 'absolute',
          right: 15
        }}
      >
        {secureText ? (
          <MaterialCommunityIcons name="eye-off" size={24} color="#bbb" />
        ) : (
          <MaterialCommunityIcons name="eye" size={24} color="#bbb" />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default InputPassword
