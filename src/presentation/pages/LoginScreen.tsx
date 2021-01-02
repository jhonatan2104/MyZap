import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from '../../../constants/Styles'
import { Auth } from '@/domain/usecases'

// import Fire from '../Fire'

type Props = {
  navigation: any
  authentication: Auth
}

const LoginScreen: React.FC<Props> = ({ navigation, authentication }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function continueClick (): void {
    const user = {
      email,
      password
    }
    authentication.auth(user)
      .then(loginSuccess)
      .catch(loginFailed)
  }

  function loginSuccess (): void {
    navigation.navigate('Chat', {
      email
    })
  }

  function loginFailed (err: any): void {
    Alert.alert('Tente outra vez!', 'Email ou Senha errados')
    console.log(err)
  }

  return (
    <KeyboardAvoidingView style={styles.conteiner} keyboardVerticalOffset={-150} behavior='position' enabled>
      <View style={styles.cicle} />
      <View style={{ marginTop: 64 }}>
        <Image source={require('../../../assets/chatAssets.png')} style={{ height: 100, width: 100, alignSelf: 'center' }} />
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.header}>Email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize = "none"
          keyboardType = "email-address"
          placeholder="Digite seu Email..."
          onChangeText={setEmail}
          value={email}/>
        <Text style={[styles.header, { marginTop: 5 }]}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          autoCorrect = {false}
          secureTextEntry
          onChangeText={setPassword}
          value={password}/>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 45 }}>
        <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate('CreateAccount')}>
          <Ionicons name="md-add" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.continue} onPress={continueClick}>
          <Ionicons name="md-arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
