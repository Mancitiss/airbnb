import { StatusBar } from 'expo-status-bar';
import TextInputField from '../../../src/views/components/TextInputField/index.js';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Pressable, Button } from 'react-native';
import react, {useState} from 'react';

const BookRoom = ({navigation}) => {
    const [stayDate, setStayDate] = useState()
    const [returnDate, setReturnDate] = useState()
    return (

        <View style={styles.container}>
            <View style={styles.fixed_heading}>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <Image style={styles.back_button} source={require('../../../assets/icons8-chevron-left-20.png')} />
                </Pressable>
                <Text style={styles.heading}>Yêu cầu đặt phòng</Text>
            </View>
            <ScrollView style={{
                marginBottom: '15%',
            }}>
                <View style={styles.intro_hotel}>
                    <Image style={{
                        height: 180,
                        width: 180,
                        borderRadius: 20,
                    }} source={require('../../../assets/about_us1.png')} />
                    <Text style={{
                        flex: 2,
                        textAlign: 'right',
                        fontSize: 20,
                        fontWeight: 'normal',
                    }}>Terracotta Hotel & Resort Đà Lạt</Text>
                </View>

                <View style={styles.section_hotel}>
                    <Text style={styles.section_heading}>Chuyến đi của bạn</Text>
                    <View style={styles.column}>
                        <View style={styles.small_section}>
                            <Text style={styles.small_heading}>Lịch</Text>

                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                }}>
                                <TextInputField
                                    keyboardType='date-pad'
                                    defaultValue={stayDate}
                                    onChange={(date) => {
                                        setStayDate(date)
                                    }}
                                    placeholder='Ngày nhận phòng'
                                />
                                <Text style={{padding:20}}>
                                    đến
                                </Text>
                                <TextInputField
                                    keyboardType='date-pad'
                                    defaultValue={returnDate}
                                    onChange={(date) => {
                                        setReturnDate(date)
                                    }}
                                    placeholder='Ngày trả phòng'
                                />
                            </View>
                            
                        </View>

                        
                    </View>
                    <View style={styles.column}>
                        <View style={styles.small_section}>
                            <Text style={styles.small_heading}>Loại phòng</Text>
                            <Text>02 người</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                        }}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={styles.section_hotel}>
                    <Text style={styles.section_heading}>Chi tiết giá</Text>
                    <View style={styles.column}>
                        <View style={styles.small_section}>
                            <Text>VND 2.190.000 x 5 đêm</Text>
                        </View>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                        }}>VND 10.950.000</Text>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.small_section}>
                            <Text>Phi dịch vụ</Text>
                        </View>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                        }}>VND 400.000</Text>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.small_section}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#a88e8a',
                            }}>TỔNG</Text>
                        </View>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                            fontWeight: 'bold',
                            color: '#a88e8a',
                        }}>VND 11.350.000</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                            textDecorationLine: 'underline',
                        }}>Thêm thông tin</Text>
                    </View>
                </View>

                <View style={styles.section_hotel}>
                    <Text style={styles.section_heading}>Thanh toán</Text>
                    <View style={{
                        width: "100%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                        <Text style={{
                            width: "70%",
                            fontSize: 18,
                            color: '#73777B'
                        }}>Phương thức thanh toán</Text>
                        <TouchableOpacity style={styles.btn_add_outline}>
                            <Text style={styles.btn_add}>THÊM</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image style={{
                            marginRight: 10,
                            height: 25,
                            width: 25,
                        }} source={require('../../../assets/icons8-visa-25.png')} />
                        <Image style={{
                            marginRight: 10,
                            height: 25,
                            width: 25,
                        }} source={require('../../../assets/icons8-mastercard-logo-48.png')} />
                        <Image style={{
                            marginRight: 10,
                            height: 30,
                            width: 30,
                        }} source={require('../../../assets/icons8-paypal-25.png')} />
                        <Image style={{
                            marginRight: 10,
                            height: 30,
                            width: 30,
                        }} source={require('../../../assets/icons8-google-pay-100.png')} />
                    </View>
                    <View style={styles.column}>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                            textDecorationLine: 'underline',
                        }}>Nhập mã giảm giá</Text>
                    </View>



                </View>

                <View style={styles.section_hotel}>
                    <Text style={styles.section_heading}>Bắt buộc cho chuyến đi</Text>
                    <View style={{
                        width: "100%",
                        marginBottom: '5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center', }}>

                        <View style={{
                            width: "70%",
                            fontSize: 18,
                            color: '#73777B'
                        }}>
                            <Text style={styles.small_heading}>Nhắn tin cho khách san</Text>
                            <Text>Để lại lời nhắn cho khách sạn về thời điểm nhận phòng của bạn</Text>
                        </View>
                        <TouchableOpacity style={styles.btn_add_outline}>
                            <Text style={styles.btn_add}>THÊM</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "100%",
                        marginBottom: '5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                        <View style={{
                            width: "70%",
                            fontSize: 18,
                            color: '#73777B'
                        }}>
                            <Text style={styles.small_heading}>Số điện thoại</Text>
                            <Text>Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật của chuyến đi.</Text>
                        </View>
                        <TouchableOpacity style={styles.btn_add_outline}>
                            <Text style={styles.btn_add}>THÊM</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.section_hotel}>
                    <Text style={styles.section_heading}>Chính sách hủy</Text>
                    <Text styles={{
                        
                    }}>Đặt phòng ở đây không được hoàn tiền nếu yêu cầu hủy. Hãy lưu ý điều này</Text>
                    <View style={styles.column}>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                            textDecorationLine: 'underline',
                        }}>Tìm hiểu thêm</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    paddingBottom: '5%',
                    borderColor: '#D0C9C0',
                    borderBottomWidth: 1,
                }}>
                    <Image style={{
                        marginTop: 10,
                        marginRight: 10,
                        height: 40,
                        width: 40,
                        

                    }} source={require('../../../assets/icons8-sand-timer-50.png')} />

                    <Text style={{
                        lineHeight: 20,
                    }}>Phòng bạn đặt sẽ không được xác nhận cho đến khi 
                    phía khách sạn chấp nhận yêu cầu (trong vòng 24h). Bạn sẽ 
                    không bị trừ tiền cho đến lúc đó.</Text>
                </View>

                <View style={styles.section_hotel}>
                    <Text style={{
                        lineHeight: 20,
                    }}>Bằng việt chọn nút bên dưới, bạn đã đồng ý với mọi nội quy, 
                    chính sách, quy chuẩn tại HaloHalo.</Text>
                    <View style={styles.column}>
                        <Text style={{
                            textAlign: 'right',
                            flex: 2,
                            textDecorationLine: 'underline',
                        }}>Tìm hiểu thêm</Text>
                    </View>
                
                </View>
                

            </ScrollView>

            <TouchableOpacity style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>
                <View style={styles.btn_book}>
                    <Text style={{
                        color: "#fff",
                        
                    }}>Gửi yêu cầu đặt phòng</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        paddingLeft: '5%',
        paddingBottom: '3%',
        marginBottom: '5%',
        marginRight: '5%',
        justifyContent: 'center',

    },
    fixed_heading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
    },
    back_button: {
        height: 30,
        width: 30,
    },
    heading: {
        paddingHorizontal: '5%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    intro_hotel:{
        flexDirection: 'row',
        marginTop: '5%',
        paddingBottom: '10%',
        borderColor: '#D0C9C0',
        borderBottomWidth: 1,
    },
    section_hotel:{

        marginTop: '5%',
        borderColor: '#D0C9C0',
        borderBottomWidth: 1,
    },
    section_heading:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    column:{
        flexDirection: 'row',
        marginBottom: '5%'
    },
    small_section:{
        flex: 1,
        paddingBottom: '5%',
    },
    small_heading:{
        fontWeight: 'bold',
        // marginBottom: '2%',
    },
    btn_book: {
        marginTop: '5%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: '#a88e8a',
        fontWeight: 'medium',
        borderRadius: 10,
    },
    btn_add_outline:{
        borderWidth: 1,
        borderColor: '#a88e8a',
        borderRadius: 5,
    },
    btn_add:{
        padding: 10,
        color: '#a88e8a',
    },

    
});

export default BookRoom;