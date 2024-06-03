
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Chat from './screens/Chat';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Post from './screens/Post';
import Account from './screens/Account';
import Welcome from './screens/Welcome';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;