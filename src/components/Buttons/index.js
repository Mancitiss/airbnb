import React from 'react';
import { Text, StyleSheet, Pressable,View } from 'react-native';
import { Button } from 'react-native';

const Buttons=(props)=> {
  const { onPress} = props;
  const style = ()=>{''.to
    switch (props.variant) {
        case 'ghost':
            return styles.ghost
        case 'link':
            return styles.link
        default:
            return styles.primary
    }
    
  }
  return (
    <Pressable
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text style={pressed?style().onPress:style()}>
          {props.title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    textAlign:'center',
    fontSize: 18,
    color: '#FFFDFD',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#A38F8B',
    onPress:{
      textAlign:'center',
      fontSize: 18,
      color: '#FFFDFD',
      paddingVertical: 16,
      borderRadius: 8,
      backgroundColor:'#504643'
    }
  },
  link: {
    textAlign:'center',
    fontSize: 14,
    opacity:0.5,
    color: '#000000',
    onPress:{
      textAlign:'center',
      fontSize: 14,
      opacity:1,
      color: '#000000',
    }
  },
  ghost: {
    textAlign:'center',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    width:'100%',
    borderColor: 'rgba(112, 112, 112,0.7)',
    fontSize: 18,
    color: '#FFFDFD',
    onPress:{
      textAlign:'center',
      paddingVertical: 16,
      borderRadius: 8,
      borderWidth: 1,
      width:'100%',
      borderColor: 'rgba(112, 112, 112,1)',
      fontSize: 18,
      color: '#FFFDFD',
    }
  },
  
});

export default Buttons 