// this is home - main screen of the app
// it has a header whose width is 100% of the screen
// header height is 22% of the screen, min height is 86px
// header has 4 sections: arrive date, depart date, guests, back button
// all 4 sections are 25% of the screen width
// and a footer whose width is 100% of the screen
// footer height is 6% of the screen, min height is 56px
// footer has 3 sections: home (this screen), love, profile
// and a body whose width is 100% of the screen
// make this page become a function and return the component instead of class

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
            </View>
            <View style={styles.body}></View>
            <View style={styles.footer}>
                <View style={{width: '33%'}}></View>
                <View style={{width: '33%'}}></View>
                <View style={{width: '33%'}}></View>
            </View>
        </View>
    );
}

export default Home;

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
    },
    header:{
        width: '100%',
        height: '10.2%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    body:{
        width: '100%',
        height: '83.2%',
        backgroundColor: '#000000',
    },
    footer:{
        width: '100%',
        height: '6.6%',
        backgroundColor: '#FF0000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
});
