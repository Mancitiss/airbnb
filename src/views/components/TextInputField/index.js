import React from "react";
import {StyleSheet, TextInput } from "react-native";

const TextInputField = (props) => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  return (
      <TextInput
        style={styles}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
      />
  );
};
const styles = StyleSheet.create({
    // marginRight: 30,
    fontSize:15,
    color:'#000000',
    opacity:0.7,
    height:36,
    width: '40%',
    borderColor: 'rgba(112, 112, 112,0.7)',
    borderBottomWidth: 1,

});

export default TextInputField;