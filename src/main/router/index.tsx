import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { makeLogin } from '../factories/pages'

import Chat from '@/presentation/pages/ChatScreen'
import CreateAccount from '@/presentation/pages/CreateAccount'

const Stack = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={makeLogin}/>
        <Stack.Screen name='CreateAccount' component={CreateAccount} />
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
