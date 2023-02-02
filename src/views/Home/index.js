import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; 

export const MODE = {
    HOME: 'home',
    FAVORITE: 'favorite',
}

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

const isFavorite = (key) => {
    let list = getFavoriteList()
    return list.find((item) => item.key === key)
}

const Post = ({id, data, navigation}) => {
    const hotel = data.hotel.find((item) => item.key === id)

    // call your hook here
    const forceUpdate = useForceUpdate();

    return (
        <View style={styles.section_img}>
            <Pressable onPress={() => navigation.navigate("DetailScreen") }>
                <Image style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 20,
                    marginBottom: '10%'
                }} source={hotel.image} />
                <Pressable style={{
                    zIndex: 10,
                    position: 'absolute',
                    margin: '2%',
                    // make it stick to the top right corner
                    top: 0,
                    right: 0,
                    
                }} 
                onPress={() => {
                    if (isFavorite(hotel.key)) {
                        removeFavorite(hotel)
                        forceUpdate()
                    }
                    else {
                        insertFavorite(hotel)
                        forceUpdate()
                    }
                }}>
                    {
                        isFavorite(hotel.key) ?
                            <Ionicons
                                name="ios-heart"
                                size={50}
                                color="pink"
                            /> : <Ionicons name="ios-heart-outline"
                                size={50}
                                color="pink" 
                            />
                    }
                </Pressable>

                {/* <Image style={{
                    position: 'absolute',
                    right: '2%',
                    margin: '2%'
                }} source={require('../../../assets/icons8-heart-24.png')} /> */}

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
                        <FontAwesome name="star" size={16} color="pink" />
                        <Text>{hotel.rating}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const getFavoriteList = () => {
    if (!global.favoriteList) {
        global.favoriteList = []
    }
    return global.favoriteList
}

const insertFavorite = (hotel) => {
    let list = getFavoriteList()
    if (!list.find((item) => item.key === hotel.key)) {
        list.push(hotel)
    }
}

const removeFavorite = (hotel) => {
    let list = getFavoriteList()
    let index = list.findIndex((item) => item.key === hotel.key)
    if (index !== -1) {
        list.splice(index, 1)
    }
}

const organize = (list, data, filter, sort, mode=MODE.HOME, navigation) => {
    if (mode === MODE.HOME) {
        return list.sort((a, b) => {
            if (sort === 'Phổ biến nhất') {
                return 0
            }
            else if (sort === 'Giá thấp nhất') {
                return a.price_value - b.price_value
            }
            else if (sort === 'Giá cao nhất') {
                return b.price_value - a.price_value
            }
            else if (sort === 'Đánh giá cao nhất') {
                return b.rating - a.rating
            }
            else if (sort === 'Đánh giá thấp nhất') {
                return a.rating - b.rating
            }
            else if (sort === 'Địa điểm gần nhất') {
                return a.distance - b.distance
            }
        }).filter((item) => {
            if (filter === 'Tất cả') {
                return true
            }
            else {
                return item.type === filter
            }
        }).map(
            (item) => <Post id={item.key} data={data} navigation={navigation} key={item.key}/>
        )
    }
    else if (mode === MODE.FAVORITE) {
        // get a copy of favorite list to avoid changing the original list
        let list = getFavoriteList().slice()
        return list.sort((a, b) => 
        {
            if (sort === 'Phổ biến nhất') {
                return 0
            }
            else if (sort === 'Giá thấp nhất') {
                return a.price_value - b.price_value
            }
            else if (sort === 'Giá cao nhất') {
                return b.price_value - a.price_value
            }
            else if (sort === 'Đánh giá cao nhất') {
                return b.rating - a.rating
            }
            else if (sort === 'Đánh giá thấp nhất') {
                return a.rating - b.rating
            }
            else if (sort === 'Địa điểm gần nhất') {
                return a.distance - b.distance
            }
        })
        .filter((item) => {
            if (filter === 'Tất cả') {
                return true
            }
            else {
                return item.type === filter
            }
        })
        .map(
            (item) => <Post id={item.key} data={data} navigation={navigation} key={item.key}/>
        )
    }
}

const Home = (props) => {
    const navigation = props.navigation
    const [list, data, mode] = [props.route.params.list, props.route.params.data, props.route.params.mode]
    const [filter, setFilter] = useState('Tất cả')
    const [sort, setSort] = useState('Phổ biến nhất')
    const [modeState, setModeState] = useState(mode)
    const displayList = organize(list, data, filter, sort, modeState, navigation)
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
                            setFilter(selectedItem.name)
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
                        data={[{id: 1, name: "Phổ biến nhất"}, {id: 2, name: "Giá thấp nhất"}, {id: 3, name: "Giá cao nhất"}, {id: 4, name: "Đánh giá cao nhất"}, {id: 5, name: "Đánh giá thấp nhất"}, {id: 6, name: "Địa điểm gần nhất"}]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setSort(selectedItem.name)
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
                    <Pressable style={{ alignItems: 'center' }} onPress={() => {
                        setModeState(MODE.HOME)
                    }}>
                        {
                            modeState === MODE.HOME ? <Ionicons name="ios-home" size={16} color="red" /> : <Ionicons name="ios-home-outline" size={16} color="black" />
                        }
                        <Text>Khám phá</Text>
                    </Pressable>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => {
                        setModeState(MODE.FAVORITE)
                    }}>
                        {
                            modeState === MODE.FAVORITE ? <Ionicons name="ios-heart" size={16} color="red" /> : <Ionicons name="ios-heart-outline" size={16} color="black" />
                        }
                        <Text style={{ color: '#73777B' }}>Yêu thích</Text>
                    </Pressable>
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
        alignItems: 'center',
        flex: 1,
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