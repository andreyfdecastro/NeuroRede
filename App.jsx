import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BatePapo from './src/screens/BatePapo';
import Chat from './src/screens/Chat';
import Conta from './src/screens/Conta';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Postagem from './src/screens/Postagem';
import RegistrationForm from './src/screens/SingUp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="BatePapo" component={BatePapo} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Postagem" component={Postagem} />
        <Stack.Screen name="SingUp" component={RegistrationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;