import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Buttons=(props)=> {
  const { onPress} = props;
  const style = (pressed)=>{
    switch (props.variant) {
        case 'ghost':
          if (pressed) {
            return styles.ghost_onPress
          }
            return styles.ghost
        case 'link':
          if (pressed) {
            return styles.link_onPress
          }
            return styles.link
        case 'icon':
          return styles.icon
        default:
          if (pressed) {
            return styles.primary_onPress
          }
            return styles.primary
    }
    
  }
  return (
    <Pressable
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text style={style(pressed)}>
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
  },
  primary_onPress: {
    textAlign:'center',
    fontSize: 18,
    color: '#FFFDFD',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor:'#504643'
  
  },
  link: {
    textAlign:'center',
    fontSize: 14,
    opacity:0.5,
    color: '#000000',
  },
  link_onPress:{
    textAlign:'center',
    fontSize: 14,
    opacity:1,
    color: '#000000',
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
  },
  ghost_onPress:{
    textAlign:'center',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    width:'100%',
    borderColor: 'rgba(112, 112, 112,1)',
    fontSize: 18,
    color: '#FFFDFD',
  },
  icon: {
    textAlign:'center'
  },
});

export default Buttons 