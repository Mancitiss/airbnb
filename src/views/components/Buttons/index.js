import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

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
    <Pressable style={style()} onPress={onPress}>
      <Text style={style().text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#A38F8B',
    text: {
        fontSize: 18,
        color: '#FFFDFD',
    },
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    text: {
        fontSize: 14,
        opacity:0.5,
        color: '#000000',
    },
  },
  ghost: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    width:'100%',
    borderColor: 'rgba(112, 112, 112,0.7)',
    text: {
        fontSize: 18,
        color: '#FFFDFD',
    },
  },
  
});

export default Buttons 