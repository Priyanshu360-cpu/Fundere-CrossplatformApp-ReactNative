import React, { Component }  from 'react';
import type {Node} from 'react';
import styles from './styles';
import Placeholder from './holders';
import HomepageScreen from './HomePage';
import Realm from "realm";
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
const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
        maxLength={40}
      />
    );
  }
const image = { uri: "https://cdn.discordapp.com/avatars/619474506381000706/ea9046cae5081106339cb15e5f150c52.png?size=4096" };
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
export default class Login extends React.Component{
    state = {
        count: 0
      }
      onPress = () => {
        const { navigate } = this.props.navigation;
        navigate('MainPage');
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
    <Password ></Password>
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