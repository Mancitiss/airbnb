// this is intro of the app
// it only has an image at the center of the app
// it is used to show the user that the app is loading

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Intro = ({navigation}) => {
    // make the app load for 10 seconds while showing Intro
    // and then navigate to Login screen
    setTimeout(() => {
        navigation.navigate('Login');
        // remove the Intro screen from the stack
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        }); 
    }, 1000);
    
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../../assets/logo-white.png')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A38F8B'
    },
    image: {
      width: '100%',
      height: '100%',
      maxWidth: 500,
      maxHeight: 500,
      resizeMode: 'contain',
    }
});

export default Intro;