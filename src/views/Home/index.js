import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const data = {
    "hotel":[
        {
            key: 1,
            name:"Terracotta Hotel & Resort",
            price:"1.290.000",
            rating:"4.8",
            image: require("../../../assets/about_us1.png")
        },
        {
            key: 2,
            name:"Terracotta Hotel & Resort",
            price:"1.290.000",
            rating:"4.8",
            image: require("../../../assets/about_us1.png")
        },
    ]
}

let homeNavigation;

const openDetail = () => {
    homeNavigation?.navigate("DetailScreen");
}

const components = () => {
    let list = []
    for (const hotel of data.hotel) {
        // random chance to push to the list is 50%
        if (Math.random() < 0.5) {
            list.push(
                <View style={styles.section_img} key={hotel.key}>
                    <Pressable onPress={openDetail}>
                        <Image style={{
                            width: '100%',
                            height: 400,
                            borderRadius: 20,
                            marginBottom: '10%'
                        }} source={hotel.image} />
                        <Image style={{
                            position: 'absolute',
                            right: '2%',
                            margin: '2%'
                        }} source={require('../../../assets/icons8-heart-24.png')} />

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>{hotel.name}</Text>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: '5%'
                        }}>
                            <Text style={{
                                width: '85%',
                                fontSize: 16
                            }}>VND {hotel.price}</Text>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Image style={{
                                    height: 25,
                                    width: 25,
                                    marginRight: 10
                                }} source={hotel.image} />
                                <Text>{hotel.rating}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            )
        }
    }
    return list
}

const Home = ({navigation}) => {
    homeNavigation = navigation;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{
                    margin: '35%',
                    width: '30%', 
                    height: '30%',
                    
                }} source={require('../../../assets/logo-color.png')} /> 
                
            </View>
            <View style={styles.body}>
                <View style={{
                    flexDirection: 'row',
                    // marginTop: '3%',
                    marginBottom: '8%'
                    }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.title}>Bộ lọc</Text>
                        <Image style={{
                            width: 15,
                            height: 15,
                            marginLeft: '10%'
                        }} source={require('../../../assets/icons8-expand-arrow-50.png')} />
       
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.title}>Sắp xếp</Text>
                        <Image style={{
                            width: 15,
                            height: 15,
                            marginLeft: '10%'
                        }} source={require('../../../assets/icons8-expand-arrow-50.png')} />

                    </TouchableOpacity>

                </View>

                <ScrollView >
                    {components()}
                </ScrollView>
                
            </View>
            <View style={styles.footer}>
                <View style={{alignItems: 'center', marginLeft: '5%'}}>
                    <Ionicons name="home-outline" size={16} color="black" />
                    <Text>Khám phá</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <EvilIcons name="heart" size={25} color="black" />
                    <Text style={{ color: '#73777B' }}>Yêu thích</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Search')}>
                        <EvilIcons name="search" size={25} color="black" />
                        <Text style={{ color: '#73777B' }}>Tìm kiếm</Text>
                    </Pressable>
                </View>
                <View style={{ alignItems: 'center', marginRight: '5%' }}>
                    <EvilIcons name="user" size={25} color="black" />
                    <Text style={{ color: '#73777B' }}>Hồ sơ</Text>
                </View>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center'
    },
    
    header:{
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    body:{
        width: '90%',
        height: '80%',
        position: 'relative',
        top: '12%'
    },
    footer:{
        width: '100%',
        height: '7%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        //
    },
    title:{
        fontSize: 18,
    },
    section_img:{
        marginBottom: '10%',
    },
});
