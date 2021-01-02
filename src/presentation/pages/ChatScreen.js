import React from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Text } from 'react-native';
import { GiftedChat, Send, InputToolbar, Composer, Bubble, MessageText} from 'react-native-gifted-chat';
import {Ionicons} from '@expo/vector-icons';

import Fire from '../../../Fire';

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
      <Composer {...props} composerHeight={50} placeholderTextColor="#514e5a" />
    )
  }
  
  renderMessageText(props){
    return (
      <MessageText {...props} textProps={{style: styles.textMessager}} />
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
          multiline
          renderUsernameOnMessage
          renderMessageText={this.renderMessageText}
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
    borderColor: '#25B7D3',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'center'
  },
  send: {
    width: 65,
    height: 65,
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
  bubble: {
    backgroundColor: 'black',
    padding: 40
  },
  textMessager: {
    fontSize: 15,
    fontWeight: '800'
  }
})