import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, StyleSheet, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from '../constants/Styles';

import Fire from  '../Fire';

export default function CreateAccount({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  //state banco
  const [created, setCreated] = useState(false);

  function clearState() {
    setEmail('')
    setName('')
    setPassword('')
  }
  function createAccountSuccess() {
    Alert.alert("Cadastor com sucesso.", "Seja bem-vindo "+ name)
    clearState()
    setCreated(true)
  }

  function createAccountFailed(error){
    Alert.alert(`Ocorreu um erro no seu cadastro`, error.message)
  }
  async function onPressCreate() {
    const user = {
      name,
      email,
      password,
    };
    await Fire.createAccount(user, createAccountSuccess, createAccountFailed);
  }

  function onPressContinue(){
    navigation.navigate('Login')
  }


  const stylesProps = StyleSheet.create({
    button: {
      width: 300,
      height: 70,
      borderRadius: 90,
      backgroundColor: '#25B7D3',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 17
    }
  })
 
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={-150} style={styles.conteiner} behavior='position' enabled >
        <View style={styles.cicle} />
        <View style={{ marginTop: 64}}>
            <Image source={require('../assets/chatAssets.png')} style={{ height: 100, width: 100, alignSelf: 'center'}} />
        </View>
        <View style={{marginHorizontal: 32}}>
            <Text style={styles.header}>Apelido</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite seu Apelido..."
            onChangeText={setName} 
            value={name}/>
            <Text style={[styles.header, {marginTop: 2}]}>Email</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize = "none"
            keyboardType = "email-address"
            placeholder="Digite seu Email..."
            onChangeText={setEmail} 
            value={email}/>
            <Text style={[styles.header, {marginTop: 2}]}>Senha</Text>
            <TextInput 
            style={styles.input}
            secureTextEntry
            passwordRules
            placeholder="Digite sua senha..."
            onChangeText={setPassword} 
            value={password}/>
        </View>
        <View style={{ alignItems: 'flex-end', marginHorizontal: 32, marginTop: 20,}}>
            {!created ? 
            (<TouchableOpacity style={styles.continue} onPress={onPressCreate}>
                <Ionicons name="md-add" size={24} color="#fff" />
            </TouchableOpacity>)
            :
            (<TouchableOpacity style={stylesProps.button} onPress={onPressContinue}>
              <Text style={stylesProps.text}>IR PARA O LOGIN</Text>
            </TouchableOpacity>)
            }
        </View>
    </KeyboardAvoidingView>
  );
}
