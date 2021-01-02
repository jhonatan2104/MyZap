import React, { useState, useCallback } from 'react'
import { View, Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { CircleBackground, Label, Input, Button, InputPasswordStyled } from './styles'

import { Auth } from '@/domain/usecases'

// import Fire from '../Fire'

type Props = {
  navigation: any
  authentication: Auth
}

const LoginScreen: React.FC<Props> = ({ navigation, authentication }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = useCallback((): void => {
    const user = {
      email,
      password
    }

    authentication.auth(user)
      .then((result) => {
        navigation.navigate('Chat', {
          user: result
        })
      })
      .catch((err) => {
        Alert.alert(err)
        console.log(err)
      })
  }, [email, password])

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <CircleBackground/>

        <View style={{ marginTop: 64 }}>
          <Image source={require('~/assets/chatAssets.png')} style={{ height: 100, width: 100, alignSelf: 'center' }} />
        </View>

        <View style={{ marginHorizontal: 32 }}>

          <Label>Email</Label>
          <Input
            autoCapitalize = "none"
            keyboardType = "email-address"
            placeholder="Digite seu Email..."
            onChangeText={setEmail}
            value={email}/>

          <Label style={{ marginTop: 5 }}>Senha</Label>
          <InputPasswordStyled
            placeholder="Digite sua senha..."
            autoCorrect = {false}
            onChangeText={setPassword}
            value={password}
          />

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 45 }}>
          <Button onPress={() => navigation.navigate('CreateAccount')}>
            <MaterialIcons name="add" size={24} color="#fff" />
          </Button>
          <Button onPress={handleLogin}>
            <MaterialIcons name="arrow-forward" size={24} color="#fff" />
          </Button>
        </View>
      </KeyboardAvoidingView>

    </ScrollView>

  )
}

export default LoginScreen
