import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';


const Bottom_Sheet_room = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Example of Bottom Sheet in React Native
        </Text>
        <Button
          onPress={toggleBottomNavigationView}
          title="Chi tiết mô tả"
        />
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          //nhấn back trở về 
          onBackdropPress={toggleBottomNavigationView}
          //nhấn bên ngoài sheet để trở về
        >
          {/*Bottom Sheet----bên trong*/}
          <View style={styles.bottomNavigationView}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>

              <Text style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Giới thiệu về nơi ở
              </Text>
              <View style={{ flex: 1 }}>
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
        </BottomSheet>
      </View>
    </SafeAreaView>
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
