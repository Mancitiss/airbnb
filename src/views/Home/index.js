import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'

let homeNavigation;

const Home = (props) => {
    const navigation = props.navigation
    const [displayList, setDisplayList] = useState(props.route.params.list)
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
                    <SelectDropdown
                        data={[{ id: 1, name: 'Tất cả' }, { id: 2, name: 'Nhà riêng' },{ id: 3, name: 'Khu nghỉ dưỡng'}, { id: 4, name: 'Homestay' }, { id: 5, name: 'Khách sạn' }, { id: 6, name: 'Căn hộ' }, { id: 7, name: 'Biệt thự' }, { id: 8, name: 'Nhà nghỉ'} ]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            if (selectedItem.name !== 'Tất cả') {
                                setDisplayList(props.route.params.list.filter(item => props.route.params.data.hotel[item.key-1].type === selectedItem.name))
                            }
                            else {
                                setDisplayList(props.route.params.list)
                            }
                        }}
                        defaultValueByIndex={0}
                        renderDropdownIcon={() => {
                            return (
                                <Image
                                    style={{ width: 15, height: 15, marginLeft: '10%' }}
                                    source={require('../../../assets/icons8-expand-arrow-50.png')}
                                />
                            )
                        }}
                        dropdownIconPosition="right"
                        rowTextForSelection={(item, index) => {
                            return item.name
                        }}
                        selectedRowStyle={{ backgroundColor: '#e0e0e0' }}
                        buttonStyle={{ width: '50%' }}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={styles.dropdown2BtnChildStyle}>
                                    <Text style={styles.title}>
                                        {selectedItem ? selectedItem.name : 'Bộ lọc'}
                                    </Text>
                                </View>
                            )
                        }}
                        rowTextStyle={styles.title}
                    />
                    <SelectDropdown
                        data={[{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        renderDropdownIcon={() => {
                            return (
                                <Image
                                    style={{ width: 15, height: 15, marginLeft: '10%' }}
                                    source={require('../../../assets/icons8-expand-arrow-50.png')}
                                />
                            )
                        }}
                        dropdownIconPosition="right"
                        rowTextForSelection={(item, index) => {
                            return item.name
                        }}
                        selectedRowStyle={{ backgroundColor: '#e0e0e0' }}
                        buttonStyle={{ width: '50%' }}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={styles.dropdown2BtnChildStyle}>
                                    <Text style={styles.title}>
                                        {selectedItem ? selectedItem.name : 'Sắp xếp'}
                                    </Text>
                                </View>
                            )
                        }}
                        rowTextStyle={styles.title}
                    />
                </View>

                <ScrollView >
                    {displayList}
                </ScrollView>
                
            </View>
            <View style={styles.footer}>
                <View style={{alignItems: 'center', marginLeft: '5%'}}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => homeNavigation.navigate("Home") }>
                        <Ionicons name="home-outline" size={16} color="black" />
                        <Text>Khám phá</Text>
                    </Pressable>
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