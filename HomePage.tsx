import homestyle from './homestyle'
import React, { Component }  from 'react';
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
const image = { uri: "https://discord.com/channels/701041158876299373/919278462747942932/936890776888156240" };
class Homepage extends Component{
render() {
    return (<View>
    <Text>Hi</Text>
                <ImageBackground source={image} resizeMode="cover" style={homestyle.image}></ImageBackground>
                </View>)
}
}

export default Homepage;