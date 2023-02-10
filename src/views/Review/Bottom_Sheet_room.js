import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { BottomSheet } from 'react-native-btr';


const Bottom_Sheet_room = ({ navigation }) => {
  let bookRoom = () => {
    navigation.navigate("BookRoom");
  }

  return (
    <View style={styles.bottomNavigationView}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50,
        justifyContent: 'space-between',
      }}>
        <View style={{
          flexDirection: 'row',
        }}>
          <Pressable onPress={() => {navigation.goBack()}} >
            <Text style={{
              textAlign: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 4,
              paddingBottom: 4,
              fontSize: 15,
              borderWidth: 1,
              width: 30,
              borderRadius: 15,
            }}>x</Text>
        </Pressable>
          

          <Text style={{
            textAlign: 'right',
            fontSize: 20,
            width: '65%',
            fontWeight: 'bold',
          }}>
            Giới thiệu về nơi ở
          </Text>
      </View>
        
        <View style={{ flex: 1, paddingTop:20}}>
          <Text style={styles.text_desc}>
            Dù quý khách muốn thể chức mọt sự kiện hay các
            dịp kỷ niệm đặc biệt khác, chúng tôi là lựa chọn tuyệt vời
            của quý khách với nhiều phòng lớn rộng rãi, được trang bị
            đầy đủ để sẵn sàng đáp ứng mọi yêu cầu.</Text>

          <Text style={styles.text_desc}>
            Chúng tôi chính là lựa chọn sáng giá dành cho những ai
            tìm kiếm một trải nghiệm xa hoa đầy thú vị trong kỳ nghỉ của mình.
            Một trong những điểm chính đa dạng của khách sạn là liệu pháp spa đa dang,
            giúp quý khách tươi trẻ thân, tâm.</Text>



        </View>
      </View>
    </View>
  );
};

export default Bottom_Sheet_room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '95%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_desc: {
  fontSize: 15,
  lineHeight: 25,
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingBottom: '3%',
},
});
