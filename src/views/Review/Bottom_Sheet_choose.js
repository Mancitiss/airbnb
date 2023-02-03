import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { BottomSheet } from 'react-native-btr';


const Bottom_Sheet_choose = ({navigation}) => {
  let bookRoom = () => {
    navigation.navigate("BookRoom");
  }
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  
//tăng và giảm số lượng phòng
  const [count1, setCount1] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count7,setCount7] = useState(0);
  const [count9, setCount9] = useState(0);

  const increase1 = () => { 
    if (count1 < 10){
      setCount1(count1 + 1);
    }
  };
  const decrease1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };
  const increase3 = () => {
    if (count3 < 10) {
      setCount3(count3 + 1);
    }
  };
  const decrease3 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1);
    }
  };
  const increase5 = () => {
    if (count5 < 10) {
      setCount5(count5 + 1);
    }
  };
  const decrease5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);
    }
  };
  const increase7 = () => {
    if (count7 < 10) {
      setCount7(count7 + 1);
    }
  };
  const decrease7 = () => {
    if (count7 > 0) {
      setCount7(count7 - 1);
    }
  };
  const increase9 = () => {
    if (count9 < 10) {
      setCount9(count9 + 1);
    }
  };
  const decrease9 = () => {
    if (count9 > 0) {
      setCount9(count9 - 1);
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
        
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
            <View>

              <Text style={{
                  textAlign: 'left',
                  padding: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  borderBottomWidth: 1,
                  borderBottomColor: '#D0C9C0',
                }}>
                LOẠI PHÒNG
              </Text>
              <View style={{
                  flexDirection: 'row',
                  paddingTop: 30,
                  paddingLeft: 30,
              }}>
                <Text style={{
                  fontWeight: 'bold',
                  paddingRight: '50%',
                }}>
                  Loại phòng 
                  </Text>
                  
                <Text style={{
                  fontWeight: 'bold',
                }}>
                  Số lượng</Text> 

              </View>
              {/* 1 - 2 người */}
              <View style={styles.room}>
                <Text style={styles.type_room}>
                  1 - 2 người
                </Text>
                <View style={styles.amount}>
                  <TouchableOpacity style={{
                    borderRadius: 10,
                    paddingRight: 7,
                    paddingLeft: 7,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                  }} onPress={decrease1}>
                    <Text style={styles.text}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{width: 30, textAlign: 'center'}}>{count1}</Text>
                  <TouchableOpacity style={styles.btn_amount} onPress={increase1}>
                  <Text style={styles.text}>
                    +
                  </Text>
                </TouchableOpacity>
                </View>

              </View>
                {/* 3-4 người */}
              <View style={styles.room}>
                <Text style={styles.type_room}>
                  3 - 4 người
                </Text>
                <View style={styles.amount}>
                  <TouchableOpacity style={{
                    borderRadius: 10,
                    paddingRight: 7,
                    paddingLeft: 7,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                  }} onPress={decrease3}>
                    <Text style={styles.text}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ width: 30, textAlign: 'center' }}>{count3}</Text>
                  <TouchableOpacity style={styles.btn_amount} onPress={increase3}>
                    <Text style={styles.text}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
                  {/* 5-6 người */}
              <View style={styles.room}>
                <Text style={styles.type_room}>
                  5 - 6 người
                </Text>
                <View style={styles.amount}>
                  <TouchableOpacity style={{
                    borderRadius: 10,
                    paddingRight: 7,
                    paddingLeft: 7,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                  }} onPress={decrease5}>
                    <Text style={styles.text}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ width: 30, textAlign: 'center' }}>{count5}</Text>
                  <TouchableOpacity style={styles.btn_amount} onPress={increase5}>
                    <Text style={styles.text}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
                  {/* 7-8 người  */}
              <View style={styles.room}>
                <Text style={styles.type_room}>
                  7 - 8 người
                </Text>
                <View style={styles.amount}>
                  <TouchableOpacity style={{
                    borderRadius: 10,
                    paddingRight: 7,
                    paddingLeft: 7,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                  }} onPress={decrease7}>
                    <Text style={styles.text}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ width: 30, textAlign: 'center' }}>{count7}</Text>
                  <TouchableOpacity style={styles.btn_amount} onPress={increase7}>
                    <Text style={styles.text}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
              {/* 9-10 người  */}
              <View style={styles.room}>
                <Text style={styles.type_room}>
                  9 - 10 người
                </Text>
                <View style={styles.amount}>
                  <TouchableOpacity style={{
                    borderRadius: 10,
                    paddingRight: 7,
                    paddingLeft: 7,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                  }} onPress={decrease9}>
                    <Text style={styles.text}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ width: 30, textAlign: 'center' }}>{count9}</Text>
                  <TouchableOpacity style={styles.btn_amount} onPress={increase9}>
                    <Text style={styles.text}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>


              <View style={{ flexDirection: 'row', paddingTop: '50%', paddingLeft:20}}>
                <View style={{
                  width: '70%',
                }}>
                  <Text>Giá / đêm</Text>
                  <Text style={{ fontWeight: 'bold', color: '#dcbdb8'}}>VND 2.190.000</Text>
                </View>
                <TouchableOpacity style={{
                  width: 90,
                  padding:10,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: '#dcbdb8',
                
                }} onPress={bookRoom} >
                  <Text style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                  }}>Đặt phòng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheet>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Bottom_Sheet_choose;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   margin: 2,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#E0F7FA',
  // },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '95%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  type_room: {
    width: 80,
  },
  room: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingBottom: '5%',
    paddingTop: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  amount: {
    flexDirection: 'row',
    paddingLeft: '45%',
  },
  btn_amount: {
    borderRadius:10,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,

  }


});