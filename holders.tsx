import {TextInput} from 'react-native';
import React, { Component }  from 'react';
import styles from './styles';
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
                        singleline
                        numberOfLines={1}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={styles.nametag}
                      />)

}
export default Placeholder;