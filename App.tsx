
import React, { Component }  from 'react';
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
  TextInput,

} from 'react-native';
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MainPage" component={MainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const image = { uri: "https://cdn.discordapp.com/avatars/619474506381000706/ea9046cae5081106339cb15e5f150c52.png?size=4096" };


const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
    />
  );
}
const Password = ()=>{
const [value, onChangeText] = React.useState('Type your Password');
return(<UselessTextInput
                        singleline
                        numberOfLines={1}
                        onChangeText={text => {onChangeText(text)}}
                        value={value}
                        secureTextEntry={true}
                        style={styles.nametag}
                      />)
}


export default MyStack;


