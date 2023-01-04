import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Icon, Button } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import AntDesign from 'react-native-vector-icons/AntDesign';




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

export default function App() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>

          {/* --------------slider-------------- */}
          <View style={{position: 'relative', top: 0}}>
            <SliderBox style={{height: 300}}
            images={images}
            // circleloop={true}
            dotColor="white"
            inactiveDotColor="black"
            dotStyle={{height: 10, width: 10, borderRadius: 50 }}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={3000}
            paginationBoxVerticalPadding={10} />

            <View style={{display: 'flex', flexDirection: "row" ,justifyContent: 'space-between',
              zIndex: 1000, position: 'absolute', top: 30, right: 0}}>
              <AntDesign name='left' style={{width: 40,color: 'black', fontSize: 25, left: -330, paddingTop: 7, paddingBottom:7, paddingLeft: 6, backgroundColor: 'white', borderRadius: 50}}></AntDesign>
              <View style={{right: 20, display: 'flex', flexDirection: 'row'}}>
                <AntDesign name='sharealt' style={{width: 40,color: 'black', fontSize: 25, elevation: 100, marginRight: 10, paddingTop: 7, paddingBottom:7, paddingLeft: 6, backgroundColor: 'white', borderRadius: 50}}></AntDesign>
                <AntDesign name='heart' style={{width: 40,height: 40,color: 'black', fontSize: 25, elevation: 100, paddingTop: 8, paddingBottom:7, paddingLeft: 7, backgroundColor: 'white', borderRadius: 50}}></AntDesign>
              </View>
          </View>
          </View>
          
          {/* ---------------title------------- */}
          <Text style={{margin: 20, fontSize: 30, fontWeight: '800'}}>
            Cozy Apartment with Amazing View - Ha Long city
          </Text>

          {/* -----------Review đầu trang-------------- */}
          <Text style={{paddingLeft: 25}}>
              <AntDesign name='star' style={{fontSize: 20, paddingRight: 20}}> {' '} 4.8/5 {'  -  '} </AntDesign>
              <Text style={{fontSize: 20, textDecorationLine: 'underline', fontWeight: '800'}}>168 lượt đánh giá</Text>
          </Text>

          {/* -----------------Giới thiệu--------------- */}
          <View style={{padding: 20, margin: 20,
            borderTopColor: '#bbb', borderTopWidth: 1,
            borderBottomColor: '#bbb', borderBottomWidth: 1,
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={require('./assets/icon-bed.png')} style={{width: 30, height: 30, marginBottom: 5, fontSize: 15}} />
              <Text style={{marginTop: 8}}>{'   '}Giường đôi</Text> 
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={require('./assets/icon-people.png')} style={{width: 30, height: 30, marginBottom: 5, fontSize: 15}} />
              <Text style={{marginTop: 8}}>{'   '}2 người</Text> 
            </View>
          </View>

          {/* ----------------Mô tả--------------- */}
          <View style={{paddingLeft: 20, paddingRight: 20}}>
              <Text style={{fontSize: 20, fontWeight: '800'}}>Mô tả</Text>
              <Text style={{textAlign: 'justify',lineHeight: 23, marginTop: 10, fontSize:15}}>Căn hộ “May Citadines Marina Hạ Long” nằm trong tổ hợp căn hộ với khách sạn tiêu chuẩn 5 sao “May CITADINES MARINA HẠ Long”, tọa lạc tại tầng 28, sở hữu vị trí đắc địa với tầm nhìn hướng ra vịnh Hạ Long, hứa hẹn sẽ mang đến cho bạn những trải nghiệm tuyệt vời nhất. Trải nghiệm tuyệt vời của một căn hộ nghỉ dưỡng đẳng cấp cho người dùng với đầy đủ tiện nghi như: phòng tập thể dục, hồ bơi trong nhà và ngoài trời với các tiện ích tiêu chuẩn quốc tế.</Text>
              <Text style={{marginTop: 10, textDecorationLine: 'underline', fontSize: 15, color: 'rgba(0, 0, 0, 0.7)',
                            paddingBottom: 30, borderBottomColor: '#bbb', borderBottomWidth: 1}}>Chi tiết {''}
              <AntDesign name='down' style={{fontSize: 15}}></AntDesign>
              </Text>
          </View>

          {/* ----------------Tiện ích------------------- */}
          <View style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: '800', paddingBottom: 10}}>Tiện ích</Text>
              <View style={{paddingLeft: 30, paddingRight: 30}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 15}}>
                  <Text style={{fontSize: 15}}>Hướng nhìn ra vườn</Text>
                  <Image source={require('./assets/icon-sun.png')} style={{width: 30, height: 30, marginBottom: 5, fontSize: 15}} />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15}}>Wifi kết nối ổn định</Text>
                  <AntDesign name='wifi' style={{fontSize: 25}}></AntDesign>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15}}>Máy lạnh riêng từng phòng</Text>
                  <Image source={require('./assets/icon-aircon.png')} style={{width: 27, height: 25, marginBottom: 5, fontSize: 15}} />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15}}>Chỗ đậu xe rộng rãi</Text>
                  <Image source={require('./assets/icon-parking.png')} style={{width: 27, height: 25, marginBottom: 5, fontSize: 15}} />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                  paddingTop: 15, paddingBottom: 0}}>
                  <Text style={{fontSize: 15}}>Thang máy tiện lợi</Text>
                  <Image source={require('./assets/icon-elevator.png')} style={{width: 27, height: 25, marginBottom: 5, fontSize: 15}} />
                </View>
              </View>
          </View>


          {/* ---------------Review------------------ */}
          <View style={{padding: 25}}>
            <Text style={{paddingTop: 20, borderTopColor: '#bbb', borderTopWidth: 1, paddingBottom: 20}}>
                <AntDesign name='star' style={{fontSize: 20, paddingRight: 20}}> {' '} 4.8/5 {'  -  '} </AntDesign>
                <Text style={{fontSize: 20, textDecorationLine: 'underline', fontWeight: '800'}}>168 lượt đánh giá</Text>
            </Text>

            <ScrollView horizontal={true} style={{marginBottom: 20}}>
              <View style={{ width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                            padding: 20, marginRight: 20, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                  <Image source={{uri: 'https://image.thanhnien.vn/460x587/Uploaded/2023/zxaijr/2022_12_10/saothailanbaifernbitrieutap13-5733.png'}} style={{width: 50, height: 50, borderRadius: 50}} />
                  <View style={{paddingLeft: 20}}>
                      <Text style={{fontWeight: '800', fontSize: 18}}>Lê Phương</Text>
                      <Text style={{fontSize: 15}}>10 Oct 2022</Text>
                  </View>
                </View>

                <Text style={{textAlign: 'justify', lineHeight: 18, fontSize: 15}}>
                Mình có khoảng thời gian rất thoải mái và thư giãn sau 3 ngày trải nghiệm tại khách sạn. Mọi thứ như một giấc mơ vậy khiến mình tiếc nuối vì kết thúc quá nhanh.
                </Text>
              </View>

              <View style={{ width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                            padding: 20, marginRight: 20, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                  <Image source={{uri: 'https://hiamdory.files.wordpress.com/2022/11/image-31.png?w=865'}} style={{width: 50, height: 50, borderRadius: 50}} />
                  <View style={{paddingLeft: 20}}>
                      <Text style={{fontWeight: '800', fontSize: 18}}>Trang</Text>
                      <Text style={{fontSize: 15}}>07 Nov 2022</Text>
                  </View>
                </View>

                <Text style={{textAlign: 'justify', lineHeight: 18, fontSize: 15}}>
                Nhà rất đẹp, thiết kế siêu độc lạ và thích mắt. Toà citadines cũng là 1 toà nhà được bài trí thiết kế rất độc đáo nên mình rất ưng.
                </Text>
              </View>

              <View style={{ width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                            padding: 20, marginRight: 20, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                  <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{width: 50, height: 50, borderRadius: 50}} />
                  <View style={{paddingLeft: 20}}>
                      <Text style={{fontWeight: '800', fontSize: 18}}>Huỳnh Khôi</Text>
                      <Text style={{fontSize: 15}}>02 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{textAlign: 'justify', lineHeight: 18, fontSize: 15}}>
                Mình có khoảng thời gian rất thoải mái và thư giãn sau 3 ngày trải nghiệm tại khách sạn. Mọi thứ như một giấc mơ vậy khiến mình tiếc nuối vì kết thúc quá nhanh.
                </Text>
              </View>

              <View style={{ width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                            padding: 20, marginRight: 20, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                  <Image source={{uri: 'https://thumbs.dreamstime.com/b/portrait-friendly-young-man-inside-trendy-handsome-guy-looks-to-camera-smiling-wishing-everyone-us-worry-enjoy-112348414.jpg'}} style={{width: 50, height: 50, borderRadius: 50}} />
                  <View style={{paddingLeft: 20}}>
                      <Text style={{fontWeight: '800', fontSize: 18}}>Mạnh Nguyễn</Text>
                      <Text style={{fontSize: 15}}>27 DEC 2022</Text>
                  </View>
                </View>

                <Text style={{textAlign: 'justify', lineHeight: 18, fontSize: 15}}>
                Chỗ ở tuyệt đẹp, view thoáng. Chủ căn hộ suport nhiệt tình. Có thời gian nghỉ dưỡng rất vui tại đây
                </Text>
              </View>
              
              <View style={{ width: 225, height: 225, borderColor: '#000', borderWidth: 1,
                            marginRight: 20, borderRadius: 20, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textDecorationLine: 'underline', fontSize: 15}} >Hiển thị tất cả 168 đánh giá</Text>
              </View>
            </ScrollView>

            <Button title="Hiển thị tất cả 168 đánh giá" color="#e11960" ></Button>
          </View>

          {/* -------------------Vị trí + địa điểm lân cận---------------- */}
          <View style={{padding: 20}}>

            {/* --------------vị trí------------------- */}
            <View style={{ marginBottom: 20}}>
              <Text style={{fontSize: 20, fontWeight: '800'}}>Vị trí</Text>
              <View style={{paddingLeft: 50, paddingRight: 50, marginBottom: 20}}>
                <Image source={{uri: 'https://www.google.com/maps/d/thumbnail?mid=1GY1GynFgJrnetohH91WuzJGvoFk&hl=en_US'}} style={{width: '100%', height: 200}} />
              </View>
              <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 5}}>
                <Image source={require('./assets/icon-location.png')} style={{width: 27, height: 25, marginBottom: 5, fontSize: 15}} />
                Thành phố Hạ Long, Quảng Ninh, Việt Nam</Text>
              <Text style={{fontSize: 15}}>
                - 5 minutes walk from the beach {'\n'}
                - Ha Long Bay - A natural wonder of the world: 5 minutes to visit {'\n'}
                - Quang Ninh Museum: 25 minutes...
              </Text>

            </View>

            {/* ---------------Địa điểm lân cận------------- */}
            <View>
                <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center'}}>Địa điểm lân cận</Text>
                <View>
                  {/* ----Giải trí---- */}
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    paddingTop: 20, paddingBottom: 0}}>
                    
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={require('./assets/icon-entertainment.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10, fontSize: 15}} />
                      <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 20}}>Khu vui chơi cho bé {'\n'}
                        <Text style={{fontSize: 14, fontWeight: '500'}}>Giải trí</Text>
                      </Text>
                    </View>
                    <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}> 831 m</Text>
                  </View>

                  {/* ----phương tiện công cộng---- */}
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    paddingTop: 20, paddingBottom: 0}}>
                    
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={require('./assets/icon-bus.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10, fontSize: 15}} />
                      <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 20}}>Trạm bus{'\n'}
                        <Text style={{fontSize: 14, fontWeight: '500'}}>Phương tiện công cộng</Text>
                      </Text>
                    </View>
                    <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}> 1.1 km</Text>
                  </View>

                  {/* -----bệnh viện-------- */}
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    paddingTop: 20, paddingBottom: 0}}>
                    
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={require('./assets/icon-hospital.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10, fontSize: 15}} />
                      <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 20}}>Bệnh viện Hạ Long{'\n'}
                        <Text style={{fontSize: 14, fontWeight: '500'}}>Sức khỏe</Text>
                      </Text>
                    </View>
                    <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}> 3.77 km</Text>
                  </View>

                  {/* ----chợ----- */}
                  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    paddingTop: 20, paddingBottom: 0}}>
                    
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={require('./assets/icon-store.png')} style={{width: 27, height: 25, marginBottom: 5, marginRight: 10, fontSize: 15}} />
                      <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 20}}>Chợ Hạ Long{'\n'}
                        <Text style={{fontSize: 14, fontWeight: '500'}}>Mua sắm</Text>
                      </Text>
                    </View>
                    <Text style={{color: 'rgba(0, 0, 0, 0.7)'}}> 6.1 km</Text>
                  </View>
                </View>
            </View>   
          </View>   

          <View style={{ width: '100%', paddingLeft: 20, paddingRight: 20, borderTopColor: '#bbb', borderTopWidth: 3}}>
            <View style={{height: 150, display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{lineHeight: 40, fontSize: 20, paddingTop: 10}}>Giá phòng / đêm / từ {'\n'}
                <Text style= {{color: '#e11960', fontSize: 25, fontWeight: '700'}}>VND 2.190.000 {'\n'}</Text>
                <Text style={{textDecorationLine: 'underline', fontWeight: '700', fontSize: 20}}>03 - 08 JAN {'\n'}</Text>
              </Text>
              
              <View style={{height: 70, width: 200, backgroundColor: '#e11960', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                <Text style={{color: '#fff', fontSize: 20}}>Chọn phòng</Text>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
      
    </View>
   
  )
}


