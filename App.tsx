
import React, { Component,Animate }  from 'react';
import type {Node} from 'react';
import styles from './styles';
import MainPage from './MainPage';
import Placeholder from './holders';
import HomepageScreen from './HomePage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput

} from 'react-native';
import Realm from "realm";
import Login from './login';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name = "Welcanimate" component={}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MainPage" component={MainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};




export default MyStack;


