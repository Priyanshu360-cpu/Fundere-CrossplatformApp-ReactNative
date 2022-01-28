/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import type {Node} from 'react';
import styles from './styles';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,

} from 'react-native';
import { WebView } from 'react-native-webview';

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
const Placeholder = ()=>{
const [value, onChangeText] = React.useState('Type your Username');
return(<UselessTextInput
                        multiline
                        numberOfLines={4}
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

class App extends Component {
  state = {
    count: 0
  }


  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
 <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<Placeholder></Placeholder>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >

         <Text>Click me</Text>
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



export default App;
