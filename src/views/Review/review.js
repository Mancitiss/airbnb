import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import react from 'react';

const Review = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fixed_heading}>
                <Image style={styles.back_button} source={require('../../../assets/icons8-chevron-left-20.png')} />
                <Text style={styles.heading}>ĐÁNH GIÁ</Text>
            </View>


            <ScrollView style={{}}>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('../../../assets/customer-boy(1).png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Hoàng Long </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('../../../assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Khách sạn mới, sạch sẽ, nhân viên nhiệt tình, có bể bơi, phòng gym, spa rất tốt, mọi người nên trải nghiệm, vị trí cũng khá thuận lợi để di chuyển và trải nghiệm du lịch tham quan. Khá ưng ý. Nếu có lần sau mình vẫn sẽ ở lại. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('../../../assets/customer-girl(3).png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Hiền Trần </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('../../../assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.8 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('../../../assets/customer-boy(2).png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Jon Smith </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('../../../assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.4 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Tôi đã có một trải nghiệm vô cùng tốt khi ở đây. Một khách sạn mang đến cho tôi cảm giác thoải mái, đồ ăn ngon, cơ sở vật chất hiện đại sang trọng và đặc biệt tôi rất hài lòng với nhân viên phục vụ ở đây. Nếu có dịp tôi sẽ quay lại khách sạn này. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('../../../assets/customer-girl(4).png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Thị Lan </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('../../../assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.2 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Mặc dù chỉ ở lại khách sạn 2 ngày nhưng đoàn đã có những trải nghiệm dịch vụ rất tốt tại đây.
Cảm ơn lễ tân và chị chủ đã hỗ trợ rất tận tình cho đoàn em. Mong trong tương lai sẽ sớm có dịp được quay lại  </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('../../../assets/customer-girl(5).png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Jessi Jang </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('../../../assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.5 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Tôi rất hài lòng về khoảng thời gian lưu trú ở khách sạn sen, nhân viên nhiệt tình,chu đáo. Chất lượng dịch vụ và giá cả tốt. Giá phòng và tất cả dịch vụ đều phải chăng. Sẽ là lựa chọn của tôi vào những dịp cần đến. </Text>
                    </View>

                </View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '8%',
        paddingLeft: '5%',
        paddingBottom: '10%',
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
        fontWeight: 'medium',
        textAlign: 'left',
    },
    review: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    info_review: {
        width: '60%',
        paddingLeft: '5%',
        // paddingRight: '25%',
    },
    name_review: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    date_review: {
        fontSize: 13,
        color: '#7F8487'
    },
    rate_review: {
        flexDirection: 'row',
        paddingHorizontal: '10%',

    },
    star: {
        width: 20,
        height: 20,
    },
    rate_number: {
        color: '#a88e8a',
        fontSize: 15,
    },
    note_review: {
        paddingTop: 15,
        maxWidth: '95%',
    },
    text_review: {
        lineHeight: 22,
        fontSize: 15,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D0C9C0'
    },
});

export default Review;