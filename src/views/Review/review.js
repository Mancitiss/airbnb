import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import react from 'react';

const ReviewPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fixed_heading}>
                <Image style={styles.back_button} source={require('./assets/icons8-chevron-left-20.png')} />
                <Text style={styles.heading}>ĐÁNH GIÁ</Text>
            </View>


            <ScrollView>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('./assets/about_us1.png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Lê Phương </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('./assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('./assets/about_us1.png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Lê Phương </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('./assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('./assets/about_us1.png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Lê Phương </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('./assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('./assets/about_us1.png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Lê Phương </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('./assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
                    </View>

                </View>

                <View style={styles.section_review}>
                    <View style={styles.review}>
                        <Image style={styles.avatar} source={require('./assets/about_us1.png')} />
                        <View style={styles.info_review}>
                            <Text style={styles.name_review}> Lê Phương </Text>
                            <Text style={styles.date_review}> 30 Dec 2022 </Text>
                        </View>
                        <View style={styles.rate_review}>
                            <Image style={styles.star} source={require('./assets/icons8-star-filled-50.png')} />
                            <Text style={styles.rate_number}> 4.0 </Text>
                        </View>
                    </View>

                    <View style={styles.note_review}>
                        <Text style={styles.text_review}>Phòng rộng rãi, khung cảnh lãng mạn, có bể bơi và khu vui chơi trong nhà. Nhà hàng giá cả hợp lý so với khu resort, gia đình mình đã có một chuyến đi vui vẻ. </Text>
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
        paddingLeft: '5%',
        paddingRight: '33%',
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
        color: '#ff0f4c',
        fontSize: 15,
        paddingLeft: 7,
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

export default ReviewPage