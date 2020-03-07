import React, { useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from '../constants/Styles';

import Fire from  '../Fire';

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onPressCreate() {
    try {
        const user = {
          name,
          email,
          password,
        };
        await Fire.createAccount(user);
      } catch ({ message }) {
        console.log('create account failed. catch error:' + message);
      }
  }
 
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
            placeholder="Digite seu Email..."
            onChangeText={setEmail} 
            value={email}/>
            <Text style={[styles.header, {marginTop: 2}]}>Senha</Text>
            <TextInput 
            style={styles.input} 
            placeholder="Digite sua senha..."
            onChangeText={setPassword} 
            value={password}/>
        </View>
        <View style={{ alignItems: 'flex-end', marginTop: 20, paddingHorizontal: 45}}>
            <TouchableOpacity style={styles.continue} onPress={onPressCreate}>
                <Ionicons name="md-add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}
