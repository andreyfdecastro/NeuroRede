import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from './path/to/Home';
import Category from './path/to/Category';
import BatePapo from './path/to/BatePapo';
import Conta from './path/to/Conta';
import Login from './path/to/Login';
import Postagem from './path/to/Postagem';
import SingUp from './path/to/SingUp';
import Chat  from '../screens/Chat';


<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={Home}
  />
  <Tab.Screen
    name="Category"
    component={Category}
  />
  <Tab.Screen
    name="Bate-papo"
    component={BatePapo}
  />
  <Tab.Screen
    name="Conta"
    component={Conta}
  />
  <Tab.Screen
    name="Login"
    component={Login}
  />
  <Tab.Screen
    name="Postagem"
    component={Postagem}
  />
  <Tab.Screen
    name="Sing up"
    component={SingUp}
  />
  <Tab.Screen
  name="Chat"
  component={Chat}
/>
</Tab.Navigator>