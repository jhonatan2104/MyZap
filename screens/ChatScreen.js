import React from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Text } from 'react-native';
import { GiftedChat, Send, InputToolbar, Composer} from 'react-native-gifted-chat';
import {Ionicons} from '@expo/vector-icons';

import Fire from '../Fire';

export default class ChatScreen extends React.Component {
  constructor(){
    super()
  }

  static navigationOptions = ({navigation}) => {
    title: "MyZap"
  }

  state = {
    messages: []
  }

  componentDidMount() {
    Fire.refOn(message => 
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
        })
      )
    );
  }

  componentWillUnmount() {
    Fire.refOff()
  }

  get user() {
    return {
      name: Fire.getUserName(),
      email: this.props.navigation.state.params.email,
      _id: Fire.uid,
    };
  }

  renderSend(props) {
    return (
        <Send
            {...props}
        >
            <View style={styles.send}>
                <Ionicons name="md-paper-plane" size={24} color="#fff" />
            </View>
        </Send>
    );
  }
  renderInputToolbar(props) {
    return (<InputToolbar 
    {...props}
    primaryStyle={{backgroundColor: 'transparent'}}
    containerStyle={styles.inputToolBar}
    />)
  }

  renderComposer(props) {
    return (
      <Composer {...props} composerHeight={55} placeholderTextColor="#514e5a" />
    )
  }
  
  renderFooter(){
    return (
      <View style={{height: 40}}/>
    )
  }

  render() {
      return (
        <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={30} enabled>
          <GiftedChat
          alwaysShowSend
          renderUsernameOnMessage
          renderFooter={this.renderFooter}
          renderComposer={this.renderComposer}
          renderSend={this.renderSend}
          renderInputToolbar={this.renderInputToolbar}
          textInputProps={{placeholder: 'Digite sua mensagem...'}}
          textInputStyle={styles.input}
          messages={this.state.messages} 
          onSend={Fire.send} 
          user={this.user} />
        </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  send: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#25B7D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputToolBar: {
    backgroundColor: 'transparent',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  actions: {
    alignItems:'center',
    justifyContent: 'center'
  }
})