import {Text, Image, View,StyleSheet,ScrollView } from 'react-native';
import Buttons from '../../components/Buttons';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import { validateNumber } from '../../utils/input/number';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MODE } from '../Home';
const data = {
  "hotel":[
      {
          key: 1,
          name:"Terracotta Hotel & Resort (KS) AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          price:"1.300.000",
          price_value: 1300000,
          rating:"4.8",
          image: require("../../../assets/about_us1.png"),
          type: "Khách sạn",
          distance: 10
      },
      {
          key: 2,
          name:"Terracotta Hotel & Resort (NR)",
          price:"1.290.000",
          price_value: 1290000,
          rating:"4.8",
          image: require("../../../assets/about_us1.png"),
          type: "Nhà riêng",
          distance: 20
      },
  ]
}

const getHotels = () => {
  let list = []
  for (const hotel of data.hotel) {
      // random chance to push to the list is 50%
      if (Math.random() < 0.5) {
          list.push(
              hotel
          )
      }
  }
  return list
}

const Search = ({navigation})=>{
    let place = ""
    let childQuantity = 0
    let adultQuantity = 0
    let count = 0
    const search=()=>{
      // navigate to detail
      console.log(place)
      console.log(childQuantity)
      console.log(adultQuantity)
      console.log(count)
      console.log(stayDate)
      console.log(returnDate)
      let list = getHotels()
      navigation.navigate('Home', {place: place, list: list, data: data, mode: MODE.HOME})
    }
    const [validChild,setValidChild] = useState(true)
    const [validAdult,setValidAdult] = useState(true)
    const [validCount, setValidCount] = useState(true)
    const [stayDate,setStayDate] = useState()
    const [returnDate,setReturnDate] = useState()
    return(
        <ScrollView >
    <View style={styles.container}>
      <Text style={styles.header} >địa điểm</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField placeholder='Chọn địa điểm bạn du lịch'
      onChange={(text)=>{place=text}}
      />

      <View style={{marginTop:25}}></View>
      <Text style={styles.header} >ngày ở</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField 
      keyboardType ='date-pad'
      defaultValue =  {stayDate}
      onChange={(date)=>{
        setStayDate(date)
      }}
      />

      <View style={{marginTop:25}}></View>
      <Text style={styles.header}>ngày trả</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField 
      keyboardType ='date-pad'
      defaultValue = {returnDate}
      onChange={(date)=>{
        setReturnDate(date)
      }}
      />

      <View style={{marginTop:25}}></View>
      <Text style={styles.header}>trẻ em</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField 
      placeholder='Nhập số lượng'  
      keyboardType ='number-pad' 
      onChange={(text)=>{
        childQuantity=text
        setValidChild(validateNumber(text))
      
      }}
      error={!validChild?'Số lượng phải là số':undefined}
      />

      <View style={{marginTop:25}}></View>
      <Text style={styles.header}>người lớn</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField 
      placeholder='Nhập số lượng' 
      keyboardType ='number-pad' 
      onChange={(text)=>{
        adultQuantity=text 
        setValidAdult(validateNumber(text))
      }}
      error={!validAdult?'Số lượng phải là số':undefined}
      />

      <View style={{marginTop:25}}></View>
      <Text style={styles.header}>số lượng</Text>
      <View style={{marginTop:14}}></View>
      <TextInputField 
      placeholder='Nhập số lượng' 
      keyboardType ='number-pad' 
      onChange={(text)=>{
        count=text 
        setValidCount(validateNumber(text))
      }}
      error={!validCount?'Số lượng phải là số':undefined}
      />

      <View style={{marginTop:40}}></View>
      <Buttons title = 'Tìm kiếm' onPress={search}></Buttons>
    </View> 
    </ScrollView>
    )
}
const styles = StyleSheet.create({
  header: {
    textTransform: 'uppercase',
    alignSelf:'flex-start',
    fontSize:30,
    color: '#B3B3B3',
    },
  container: {
    justifyContent:'center',
    height:'100%',
    padding:20,
    marginTop: 22,
    display: 'flex',
    backgroundColor: '#fff',
  },
  text:{
    textAlign:'center',
    fontSize:20,
    color:'#B3B3B3',
  }
});
export default Search