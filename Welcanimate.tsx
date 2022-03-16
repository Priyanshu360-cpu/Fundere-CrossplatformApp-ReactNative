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
    Animated
  
  } from 'react-native';
  import {
    useSharedValue,
    useAnimatedStyle,
  } from 'react-native-reanimated';v
  import * as Animatable from "react-native-animatable";
  import styles from './animated';
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: 50,
    };
  });
class Welcanimate extends Component{
    componentWillMount = () => {
        this.animatedWidth = new Animated.Value(50)
        this.animatedHeight = new Animated.Value(100)
     }
     animatedBox = () => {
        Animated.timing(this.animatedWidth, {
           toValue: 200,
           duration: 1000
        }).start()
        Animated.timing(this.animatedHeight, {
           toValue: 500,
           duration: 500
        }).start()
    }
    render(){
        return(
            <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
        )
    }
}
export default Welcanimate;
