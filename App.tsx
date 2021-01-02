import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Chat from './src/presentation/pages/ChatScreen'
import Login from './src/presentation/pages/LoginScreen'
import CreateAccount from './src/presentation/pages/CreateAccount'

const AppStack = createStackNavigator(
  {
    Login,
    Chat,
    CreateAccount
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppStack)
