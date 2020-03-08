import React from 'react';
import {Platform ,KeyboardAvoidingView, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Fire from '../Fire';
import { HeaderTitle } from 'react-navigation-stack';

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
      name: Fire.getUserName,
      email: this.props.navigation.state.params.email,
      _id: Fire.uid,
    };
  }

  render() {
      return (
        <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={30} enabled>
          <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />
        </KeyboardAvoidingView>
      )
  }
}