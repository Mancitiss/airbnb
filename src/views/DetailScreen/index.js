import { StatusBar } from 'expo-status-bar'; 
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Icon, Button, Pressable, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInputField from '../../components/TextInputField';
import { EvilIcons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';


const images = [
  'https://a0.muscache.com/im/pictures/33e52704-0cbb-4956-9615-833c37e9b9a0.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/8976c5f3-eac2-46e8-8746-b2f3515be31b.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/5b5b4969-608c-40f3-bafd-6759b9c9aa03.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/1bff8950-1844-4dbd-95ff-14ddb705d048.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/4f195226-3831-450a-aa7d-2d075f308a49.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-645614243188847606/original/8765091f-6b79-4c57-94c6-5e738c1f85dc.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/c0dd2554-1662-4caa-b408-09c682f585e7.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/321313ff-87ad-49b7-b843-5d4caaaca8e8.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-645614243188847606/original/e1565a15-87bf-41fe-a1f3-65ed7f43f1a9.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/28f4f58c-1ead-4483-889b-1ffd695cd1ec.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/miso/Hosting-645614243188847606/original/088046ea-d106-4036-a216-c269900b9a79.jpeg?im_w=720',
]

export default function DetailScreen({navigation}) {
  let displayReviews = () => {
    navigation.navigate("Reviews");
  }
  let chooseRoom = () => {
    navigation.navigate("ChooseRoom");
  }
  let MoreDetail = () => {
    navigation.navigate("MoreDetail");
  }
  let bookRoom = () => {
    navigation.navigate("BookRoom");
  }
  const [stayDate,setStayDate] = useState()
  const [returnDate,setReturnDate] = useState()

  const [visible, setVisible] = useState(false);

  //ch???n lo???i ph??ng 
  const toggleBottomNavigationView1 = () => {
    setVisible(!visible);
  };


 

  //t??ng v?? gi???m s??? l?????ng ph??ng
  const [count1, setCount1] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count9, setCount9] = useState(0);

  const increase1 = () => {
    if (count1 < 10) {
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
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 80, borderBottomColor: '#bbb', borderBottomWidth: 3, flexDirection: 'row' }}>
        <Pressable onPress={() => navigation.goBack()} style={{ marginEnd: 'auto' }}>
          <AntDesign name='left' style={{ width: 40, color: 'black', fontSize: 24, top: 32, paddingTop: 7, paddingBottom: 7, paddingLeft: 6, alignSelf: 'flex-start' }}></AntDesign>
        </Pressable>
        <Pressable style={{ marginStart: 'auto', marginEnd: 0 }}>
          <AntDesign name='sharealt' style={{ alignSelf: 'flex-end', width: 40, top: 32, paddingTop: 7, paddingBottom: 7, paddingLeft: 6, color: 'black', fontSize: 24 }}></AntDesign>
        </Pressable>
        <Pressable style={{ marginStart: 8, marginEnd: 4 }}>
          <EvilIcons name='heart' style={{ width: 40, top: 32, paddingTop: 7, paddingBottom: 7, paddingLeft: 6, color: 'black', fontSize: 30 }}></EvilIcons>
        </Pressable>
      </View>
      <ScrollView>
        <View>

          {/* --------------slider-------------- */}
          <View style={{ position: 'relative', top: -5 }}>
            <SliderBox style={{ height: 300 }}
              images={images}
              // circleloop={true}
              dotColor="white"
              inactiveDotColor="black"
              dotStyle={{ height: 10, width: 10, borderRadius: 50 }}
              imageLoadingColor="black"
              autoplay={true}
              autoplayInterval={3000}
              paginationBoxVerticalPadding={10} />


          </View>

          {/* ---------------title------------- */}
          <Text style={{ margin: 20, fontSize: 30, fontWeight: '800' }}>
            Cozy Apartment with Amazing View - Ha Long city
          </Text>

          {/* -----------Review ?????u trang-------------- */}
          <Text style={{ paddingLeft: 25 }}>
            <AntDesign name='star' style={{ fontSize: 20, paddingRight: 20 }}> {' '} 4.8/5 {'  -  '} </AntDesign>
            <Text style={{ fontSize: 20, textDecorationLine: 'underline', fontWeight: '800' }}>168 l?????t ????nh gi??</Text>
          </Text>

          {/* -----------------Gi???i thi???u--------------- */}
          <View style={{
            padding: 20, margin: 20,
            borderTopColor: '#bbb', borderTopWidth: 1,
            borderBottomColor: '#bbb', borderBottomWidth: 1,
            flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={require('./assets/icon-bed.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              <Text style={{ marginTop: 8 }}>{'   '}Gi?????ng ????i</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={require('./assets/icon-people.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              <Text style={{ marginTop: 8 }}>{'   '}2 ng?????i</Text>
            </View>
          </View>

          {/* ----------------M?? t???--------------- */}
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '800' }}>M?? t???</Text>
            <Text style={{ textAlign: 'justify', lineHeight: 23, marginTop: 10, fontSize: 15 }}>C??n h??? ???May Citadines Marina H??? Long??? n???m trong t??? h???p c??n h??? v???i kh??ch s???n ti??u chu???n 5 sao ???May CITADINES MARINA H??? Long???, t???a l???c t???i t???ng 28, s??? h???u v??? tr?? ?????c ?????a v???i t???m nh??n h?????ng ra v???nh H??? Long, h???a h???n s??? mang ?????n cho b???n nh???ng tr???i nghi???m tuy???t v???i nh???t. Tr???i nghi???m tuy???t v???i c???a m???t c??n h??? ngh??? d?????ng ?????ng c???p cho ng?????i d??ng v???i ?????y ????? ti???n nghi nh??: ph??ng t???p th??? d???c, h??? b??i trong nh?? v?? ngo??i tr???i v???i c??c ti???n ??ch ti??u chu???n qu???c t???...</Text>
            <Pressable onPress={MoreDetail}>
              <Text style={{fontSize: 16, textDecorationLine: 'underline', marginTop: 10, color: 'grey'}}>Chi ti???t</Text>
            </Pressable>
          </View>

          {/* ----------------Ti???n ??ch------------------- */}
          <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', paddingBottom: 10 }}>Ti???n ??ch</Text>
            <View style={{ paddingLeft: 30, paddingRight: 30 }}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15
              }}>
                <Text style={{ fontSize: 15 }}>H?????ng nh??n ra v?????n</Text>
                <Image source={require('./assets/icon-sun.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>Wifi k???t n???i ???n ?????nh</Text>
                <AntDesign name='wifi' style={{ fontSize: 25 }}></AntDesign>
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>M??y l???nh ri??ng t???ng ph??ng</Text>
                <Image source={require('./assets/icon-aircon.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>Ch??? ?????u xe r???ng r??i</Text>
                <Image source={require('./assets/icon-parking.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 0
              }}>
                <Text style={{ fontSize: 15 }}>Thang m??y ti???n l???i</Text>
                <Image source={require('./assets/icon-elevator.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>
            </View>
          </View>

          {/* ---------------Review------------------ */}
          <View style={{ padding: 25 }}>
            <Text style={{ paddingTop: 20, borderTopColor: '#bbb', borderTopWidth: 1, paddingBottom: 20 }}>
              <AntDesign name='star' style={{ fontSize: 20, paddingRight: 20 }}> {' '} 4.8/5 {'  -  '} </AntDesign>
              <Text style={{ fontSize: 20, textDecorationLine: 'underline', fontWeight: '800' }}>168 l?????t ????nh gi??</Text>
            </Text>

            <ScrollView horizontal={true} style={{ marginBottom: 20 }}>
              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://image.thanhnien.vn/460x587/Uploaded/2023/zxaijr/2022_12_10/saothailanbaifernbitrieutap13-5733.png' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>L?? Ph????ng</Text>
                    <Text style={{ fontSize: 15 }}>10 Oct 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  M??nh c?? kho???ng th???i gian r???t tho???i m??i v?? th?? gi??n sau 3 ng??y tr???i nghi???m t???i kh??ch s???n. M???i th??? nh?? m???t gi???c m?? v???y khi???n m??nh ti???c nu???i v?? k???t th??c qu?? nhanh.
                </Text>
              </View>

              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://hiamdory.files.wordpress.com/2022/11/image-31.png?w=865' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>Trang</Text>
                    <Text style={{ fontSize: 15 }}>07 Nov 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  Nh?? r???t ?????p, thi???t k??? si??u ?????c l??? v?? th??ch m???t. To?? citadines c??ng l?? 1 to?? nh?? ???????c b??i tr?? thi???t k??? r???t ?????c ????o n??n m??nh r???t ??ng.
                </Text>
              </View>

              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0ZO3YYtsVeboTftmgFs5QqWG2BmxZezr5g&usqp=CAU' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>Hu???nh Kh??i</Text>
                    <Text style={{ fontSize: 15 }}>02 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  M??nh c?? kho???ng th???i gian r???t tho???i m??i v?? th?? gi??n sau 3 ng??y tr???i nghi???m t???i kh??ch s???n. M???i th??? nh?? m???t gi???c m?? v???y khi???n m??nh ti???c nu???i v?? k???t th??c qu?? nhanh.
                </Text>
              </View>

              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://thumbs.dreamstime.com/b/portrait-friendly-young-man-inside-trendy-handsome-guy-looks-to-camera-smiling-wishing-everyone-us-worry-enjoy-112348414.jpg' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>M???nh Nguy???n</Text>
                    <Text style={{ fontSize: 15 }}>27 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  Ch??? ??? tuy???t ?????p, view tho??ng. Ch??? c??n h??? suport nhi???t t??nh. C?? th???i gian ngh??? d?????ng r???t vui t???i ????y
                </Text>
              </View>
            </ScrollView>

            <Button title="Hi???n th??? t???t c??? 168 ????nh gi??" color="#a88e8a" onPress={displayReviews} ></Button>
          </View>

          {/* -------------------V??? tr?? + ?????a ??i???m l??n c???n---------------- */}
          <View style={{ padding: 20 }}>

            {/* --------------v??? tr??------------------- */}
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '800' }}>V??? tr??</Text>
              <View style={{ paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <Image source={{ uri: 'https://www.google.com/maps/d/thumbnail?mid=1GY1GynFgJrnetohH91WuzJGvoFk&hl=en_US' }} style={{ width: '100%', height: 200 }} />
              </View>
              <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5 }}>
                <Image source={require('./assets/icon-location.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
                Th??nh ph??? H??? Long, Qu???ng Ninh, Vi???t Nam</Text>
              <Text style={{ fontSize: 15 }}>
                - 5 minutes walk from the beach {'\n'}
                - Ha Long Bay - A natural wonder of the world: 5 minutes to visit {'\n'}
                - Quang Ninh Museum: 25 minutes...
              </Text>

            </View>

            {/* ---------------?????a ??i???m l??n c???n------------- */}
            <View>
              <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>?????a ??i???m l??n c???n</Text>
              <View>
                {/* ----Gi???i tr??---- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-entertainment.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Khu vui ch??i cho b?? {'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Gi???i tr??</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 831 m</Text>
                </View>

                {/* ----ph????ng ti???n c??ng c???ng---- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-bus.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Tr???m bus{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Ph????ng ti???n c??ng c???ng</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 1.1 km</Text>
                </View>

                {/* -----b???nh vi???n-------- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-hospital.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>B???nh vi???n H??? Long{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>S???c kh???e</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 3.77 km</Text>
                </View>

                {/* ----ch???----- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-store.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Ch??? H??? Long{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Mua s???m</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 6.1 km</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* nav-bottom */}
      <View style={{borderTopColor: '#bbb', borderTopWidth: 3 }}>
        {/* price */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5, marginLeft: 20, marginRight: 20}}> 
          <Text style={{fontSize: 18}}>Gi?? ph??ng / ????m / t???</Text>
          <Text style={{ color: '#a88e8a', fontSize: 25, fontWeight: '700'}}> 2.190.000 VND/????m</Text>
        </View>
        {/* calendar */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginLeft: 20, marginRight: 20, marginBottom: 15}}>
          <View style={{flex: 2}}>
            <TextInputField
              keyboardType='date-pad'
              defaultValue={stayDate}
              onChange={(date) => {
                setStayDate(date)
                console.log(date)
              }} />
          </View>
          <View style={{flex: 1 }}>
            <Text style={{ fontSize: 18, alignSelf: 'center' }}> ?????n </Text>
          </View>
          <View style={{flex: 2}}>
            <TextInputField
              keyboardType='date-pad'
              defaultValue={returnDate}
              onChange={(date) => {
                setReturnDate(date)
                console.log(date)
              }} />
          </View>
        </View>

        {/* button */}
        <View style={{height: 50, backgroundColor: '#a88e8a', width: '100%', flexDirection:'row' ,justifyContent: 'center', alignItems: 'center'}}>
          <Pressable onPress={toggleBottomNavigationView1}>
          
            <Text style={{ color: '#fff', fontSize: 20}}>Ch???n lo???i ph??ng</Text>
          </Pressable>
          <BottomSheet
            visible={visible}
            onBackButtonPress={toggleBottomNavigationView1}
            //nh???n back tr??? v??? 
            onBackdropPress={toggleBottomNavigationView1}
          //nh???n b??n ngo??i sheet ????? tr??? v???
          >
            {/*Bottom Sheet----b??n trong*/}
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
                  LO???I PH??NG
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
                    Lo???i ph??ng
                  </Text>

                  <Text style={{
                    fontWeight: 'bold',
                  }}>
                    S??? l?????ng</Text>

                </View>
                {/* 1 - 2 ng?????i */}
                <View style={styles.room}>
                  <Text style={styles.type_room}>
                    1 - 2 ng?????i
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
                    <Text style={{ width: 30, textAlign: 'center' }}>{count1}</Text>
                    <TouchableOpacity style={styles.btn_amount} onPress={increase1}>
                      <Text style={styles.text}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>

                </View>
                {/* 3-4 ng?????i */}
                <View style={styles.room}>
                  <Text style={styles.type_room}>
                    3 - 4 ng?????i
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
                {/* 5-6 ng?????i */}
                <View style={styles.room}>
                  <Text style={styles.type_room}>
                    5 - 6 ng?????i
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
                {/* 7-8 ng?????i  */}
                <View style={styles.room}>
                  <Text style={styles.type_room}>
                    7 - 8 ng?????i
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
                {/* 9-10 ng?????i  */}
                <View style={styles.room}>
                  <Text style={styles.type_room}>
                    9 - 10 ng?????i
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


                <View style={{ flexDirection: 'row', paddingTop: '50%', paddingLeft: 20 }}>
                  <View style={{
                    width: '70%',
                  }}>
                    <Text>Gi?? / ????m</Text>
                    <Text style={{ fontWeight: 'bold', color: '#dcbdb8' }}>VND 2.190.000</Text>
                  </View>
                  <TouchableOpacity style={{
                    width: 90,
                    padding: 10,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: '#dcbdb8',

                  }} onPress={bookRoom} >
                    <Text style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff',
                    }}>?????t ph??ng</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </BottomSheet>
        </View>
      </View>
    </View>
  )
}


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
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,

  }


});