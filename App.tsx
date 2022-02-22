
import React, { Component }  from 'react';
import type {Node} from 'react';
import styles from './styles';
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
          component={App}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const image = { uri: "https://cdn.discordapp.com/avatars/619474506381000706/ea9046cae5081106339cb15e5f150c52.png?size=4096" };
const bgimg = ({title}): Node=> {
  return(
    <View style={styles.sectionContainer}>
    <Text>
       Heyo
       {title}</Text>
       </View>
  )
}
const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}
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
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={styles.nametag}
                      />)

}

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

 class App extends React.Component {
  state = {
    count: 0
  }


  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  onSign = ({ navigation }) => {
    const { navigate } = this.props.navigation;
    navigate('Profile', { name: 'Jane' })
  }

 render() {
    return (
      <View style={styles.container}>
 <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<Placeholder></Placeholder>
<Password></Password>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
                 style={styles.button}
                 onPress={this.onSign}
                >
                 <Text>New? Sign In</Text>
                </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times

          </Text>

        </View>
        </ImageBackground>
      </View>

    )
  }
}
export default MyStack;


