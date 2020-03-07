import React, { useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from '../constants/Styles';

import Fire from '../Fire';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function continueClick() {
    const user = {
        email,
        password
    }
    Fire.checkAuth(user, loginSuccess,loginFailed);
  }

  function loginSuccess() {
    navigation.navigate('Chat', {
        email,
        password
    })
  }

  function loginFailed() {
    Alert.alert("Falha de Autenticação")
  }

  return (
    <KeyboardAvoidingView style={styles.conteiner} keyboardVerticalOffset={-150} behavior='position' enabled>
        <View style={styles.cicle} />
        <View style={{ marginTop: 64}}>
            <Image source={require('../assets/chatAssets.png')} style={{ height: 100, width: 100, alignSelf: 'center'}} />
        </View>
        <View style={{marginHorizontal: 32}}>
            <Text style={styles.header}>Email</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize = "none"
            keyboardType = "email-address"
            placeholder="Digite seu Email..."
            onChangeText={setEmail} 
            value={email}/>
            <Text style={[styles.header, {marginTop: 5}]}>Senha</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Digite sua senha..."
            autoCorrect = {false}
            passwordRules
            onChangeText={setPassword} 
            value={password}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 45}}>
            <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate("CreateAccount")}>
                <Ionicons name="md-add" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.continue} onPress={continueClick}>
                <Ionicons name="md-arrow-round-forward" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}
