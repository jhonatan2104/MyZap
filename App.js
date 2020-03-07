import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Chat from './screens/ChatScreen';
import Login from './screens/LoginScreen';
import CreateAccount from './screens/CreateAccount';


const AppStack = createStackNavigator(
  {
   Login,
   Chat,
   CreateAccount
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppStack);