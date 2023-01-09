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
import { View, Text, StyleSheet,TouchableOpacity, Button, Image, ScrollView } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
                <View style={{width: '25%'}}></View>
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
                    <View style={styles.section_img}>
                            <Image style={{
                                width: '100%',
                                height: 400,
                                borderRadius: 20,
                                marginBottom: '10%'
                            }} source={require('../../../assets/about_us1.png')} />
                            <Image style={{
                                position: 'absolute',
                                right: '2%',
                                margin: '2%'
                            }} source={require('../../../assets/icons8-heart-24.png')} />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                letterSpacing: 0.5
                            }}>Terracotta Hotel & Resort</Text>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                marginTop: '5%'
                            }}>
                                <Text style={{
                                    width: '85%',
                                    fontSize: 16
                                }}>VND 1.290.000</Text>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Image style={{
                                        height: 25,
                                        width: 25,
                                        marginRight: 10
                                    }} source={require('../../../assets/about_us1.png')} />
                                    <Text>4.8</Text>
                                </View>
                            </View>
                    </View>

                    <View style={styles.section_img}>
                        <Image style={{
                            width: '100%',
                            height: 400,
                            borderRadius: 20,
                            marginBottom: '10%'
                        }} source={require('../../../assets/about_us1.png')} />
                        <Image style={{
                            position: 'absolute',
                            right: '2%',
                            margin: '2%'
                        }} source={require('../../../assets/icons8-heart-24.png')} />

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>Terracotta Hotel & Resort</Text>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: '5%'
                        }}>
                            <Text style={{
                                width: '85%',
                                fontSize: 16
                            }}>VND 1.290.000</Text>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Image style={{
                                    height: 25,
                                    width: 25,
                                    marginRight: 10
                                }} source={require('../../../assets/about_us1.png')} />
                                <Text>4.8</Text>
                            </View>
                        </View>
                    </View>
                    
                    
                </ScrollView>
                
            </View>
            <View style={styles.footer}>
                <View style={{alignItems: 'center', marginLeft: '5%'}}>
                    <Image style={{
                        height: 25,
                        width: 25,
                    }} source={require('../../../assets/icons8-search-48.png')} />
                    <Text>Khám phá</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{
                        height: 25,
                        width: 25,
                    }} source={require('../../../assets/icons8-heart-24.png')} />
                    <Text style={{ color: '#73777B' }}>Yêu thích</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{
                        height: 25,
                        width: 25,
                    }} source={require('../../../assets/icons8-key-64.png')} />
                    <Text style={{ color: '#73777B' }}>Chìa khóa</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{
                        height: 25,
                        width: 25,
                    }} source={require('../../../assets/icons8-secured-letter-32.png')} />
                    <Text style={{ color: '#73777B' }}>Hộp thư</Text>
                </View>
                <View style={{ alignItems: 'center', marginRight: '5%' }}>
                    <Image style={{
                        height: 25,
                        width: 25,
                    }} source={require('../../../assets/icons8-male-user-16.png')} />
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
        backgroundColor: '#FF7B54',
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
