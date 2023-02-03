import { StatusBar } from 'expo-status-bar'; 
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Icon, Button, Pressable } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInputField from '../../components/TextInputField';
import { EvilIcons } from '@expo/vector-icons';


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
  const [stayDate,setStayDate] = useState()
  const [returnDate,setReturnDate] = useState()

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

          {/* -----------Review đầu trang-------------- */}
          <Text style={{ paddingLeft: 25 }}>
            <AntDesign name='star' style={{ fontSize: 20, paddingRight: 20 }}> {' '} 4.8/5 {'  -  '} </AntDesign>
            <Text style={{ fontSize: 20, textDecorationLine: 'underline', fontWeight: '800' }}>168 lượt đánh giá</Text>
          </Text>

          {/* -----------------Giới thiệu--------------- */}
          <View style={{
            padding: 20, margin: 20,
            borderTopColor: '#bbb', borderTopWidth: 1,
            borderBottomColor: '#bbb', borderBottomWidth: 1,
            flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={require('./assets/icon-bed.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              <Text style={{ marginTop: 8 }}>{'   '}Giường đôi</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={require('./assets/icon-people.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              <Text style={{ marginTop: 8 }}>{'   '}2 người</Text>
            </View>
          </View>

          {/* ----------------Mô tả--------------- */}
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '800' }}>Mô tả</Text>
            <Text style={{ textAlign: 'justify', lineHeight: 23, marginTop: 10, fontSize: 15 }}>Căn hộ “May Citadines Marina Hạ Long” nằm trong tổ hợp căn hộ với khách sạn tiêu chuẩn 5 sao “May CITADINES MARINA HẠ Long”, tọa lạc tại tầng 28, sở hữu vị trí đắc địa với tầm nhìn hướng ra vịnh Hạ Long, hứa hẹn sẽ mang đến cho bạn những trải nghiệm tuyệt vời nhất. Trải nghiệm tuyệt vời của một căn hộ nghỉ dưỡng đẳng cấp cho người dùng với đầy đủ tiện nghi như: phòng tập thể dục, hồ bơi trong nhà và ngoài trời với các tiện ích tiêu chuẩn quốc tế...</Text>
            <Pressable onPress={MoreDetail}>
              <Text style={{fontSize: 16, textDecorationLine: 'underline', marginTop: 10, color: 'grey'}}>Chi tiết</Text>
            </Pressable>
          </View>

          {/* ----------------Tiện ích------------------- */}
          <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', paddingBottom: 10 }}>Tiện ích</Text>
            <View style={{ paddingLeft: 30, paddingRight: 30 }}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15
              }}>
                <Text style={{ fontSize: 15 }}>Hướng nhìn ra vườn</Text>
                <Image source={require('./assets/icon-sun.png')} style={{ width: 30, height: 30, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>Wifi kết nối ổn định</Text>
                <AntDesign name='wifi' style={{ fontSize: 25 }}></AntDesign>
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>Máy lạnh riêng từng phòng</Text>
                <Image source={require('./assets/icon-aircon.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 10
              }}>
                <Text style={{ fontSize: 15 }}>Chỗ đậu xe rộng rãi</Text>
                <Image source={require('./assets/icon-parking.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 15, paddingBottom: 0
              }}>
                <Text style={{ fontSize: 15 }}>Thang máy tiện lợi</Text>
                <Image source={require('./assets/icon-elevator.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
              </View>
            </View>
          </View>

          {/* ---------------Review------------------ */}
          <View style={{ padding: 25 }}>
            <Text style={{ paddingTop: 20, borderTopColor: '#bbb', borderTopWidth: 1, paddingBottom: 20 }}>
              <AntDesign name='star' style={{ fontSize: 20, paddingRight: 20 }}> {' '} 4.8/5 {'  -  '} </AntDesign>
              <Text style={{ fontSize: 20, textDecorationLine: 'underline', fontWeight: '800' }}>168 lượt đánh giá</Text>
            </Text>

            <ScrollView horizontal={true} style={{ marginBottom: 20 }}>
              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://image.thanhnien.vn/460x587/Uploaded/2023/zxaijr/2022_12_10/saothailanbaifernbitrieutap13-5733.png' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>Lê Phương</Text>
                    <Text style={{ fontSize: 15 }}>10 Oct 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  Mình có khoảng thời gian rất thoải mái và thư giãn sau 3 ngày trải nghiệm tại khách sạn. Mọi thứ như một giấc mơ vậy khiến mình tiếc nuối vì kết thúc quá nhanh.
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
                  Nhà rất đẹp, thiết kế siêu độc lạ và thích mắt. Toà citadines cũng là 1 toà nhà được bài trí thiết kế rất độc đáo nên mình rất ưng.
                </Text>
              </View>

              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0ZO3YYtsVeboTftmgFs5QqWG2BmxZezr5g&usqp=CAU' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>Huỳnh Khôi</Text>
                    <Text style={{ fontSize: 15 }}>02 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  Mình có khoảng thời gian rất thoải mái và thư giãn sau 3 ngày trải nghiệm tại khách sạn. Mọi thứ như một giấc mơ vậy khiến mình tiếc nuối vì kết thúc quá nhanh.
                </Text>
              </View>

              <View style={{
                width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                padding: 20, marginRight: 20, borderRadius: 20
              }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Image source={{ uri: 'https://thumbs.dreamstime.com/b/portrait-friendly-young-man-inside-trendy-handsome-guy-looks-to-camera-smiling-wishing-everyone-us-worry-enjoy-112348414.jpg' }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>Mạnh Nguyễn</Text>
                    <Text style={{ fontSize: 15 }}>27 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{ textAlign: 'justify', lineHeight: 18, fontSize: 15 }}>
                  Chỗ ở tuyệt đẹp, view thoáng. Chủ căn hộ suport nhiệt tình. Có thời gian nghỉ dưỡng rất vui tại đây
                </Text>
              </View>
            </ScrollView>

            <Button title="Hiển thị tất cả 168 đánh giá" color="#a88e8a" onPress={displayReviews} ></Button>
          </View>

          {/* -------------------Vị trí + địa điểm lân cận---------------- */}
          <View style={{ padding: 20 }}>

            {/* --------------vị trí------------------- */}
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '800' }}>Vị trí</Text>
              <View style={{ paddingLeft: 50, paddingRight: 50, marginBottom: 20 }}>
                <Image source={{ uri: 'https://www.google.com/maps/d/thumbnail?mid=1GY1GynFgJrnetohH91WuzJGvoFk&hl=en_US' }} style={{ width: '100%', height: 200 }} />
              </View>
              <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5 }}>
                <Image source={require('./assets/icon-location.png')} style={{ width: 27, height: 25, marginBottom: 5 }} />
                Thành phố Hạ Long, Quảng Ninh, Việt Nam</Text>
              <Text style={{ fontSize: 15 }}>
                - 5 minutes walk from the beach {'\n'}
                - Ha Long Bay - A natural wonder of the world: 5 minutes to visit {'\n'}
                - Quang Ninh Museum: 25 minutes...
              </Text>

            </View>

            {/* ---------------Địa điểm lân cận------------- */}
            <View>
              <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>Địa điểm lân cận</Text>
              <View>
                {/* ----Giải trí---- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-entertainment.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Khu vui chơi cho bé {'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Giải trí</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 831 m</Text>
                </View>

                {/* ----phương tiện công cộng---- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-bus.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Trạm bus{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Phương tiện công cộng</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 1.1 km</Text>
                </View>

                {/* -----bệnh viện-------- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-hospital.png')} style={{ width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Bệnh viện Hạ Long{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Sức khỏe</Text>
                    </Text>
                  </View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}> 3.77 km</Text>
                </View>

                {/* ----chợ----- */}
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 20, paddingBottom: 0
                }}>

                  <View style={{flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./assets/icon-store.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10 }} />
                    <Text style={{ fontSize: 16, fontWeight: '700', lineHeight: 20 }}>Chợ Hạ Long{'\n'}
                      <Text style={{ fontSize: 14, fontWeight: '500' }}>Mua sắm</Text>
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
          <Text style={{fontSize: 18}}>Giá phòng / đêm / từ</Text>
          <Text style={{ color: '#a88e8a', fontSize: 25, fontWeight: '700'}}> 2.190.000 VND/đêm</Text>
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
            <Text style={{ fontSize: 18, alignSelf: 'center' }}> đến </Text>
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
          <Pressable onPress={chooseRoom}>
            <Text style={{ color: '#fff', fontSize: 20}}>Chọn loại phòng</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}


