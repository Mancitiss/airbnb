import React from "react";
import { Image, StyleSheet, View, Text, Button, Pressable, TouchableOpacity } from 'react-native';


const Profile = ({navigation}) =>{

    return (
        <View style={styles.container}>
            <Text style={styles.heading_profile}>HỒ SƠ</Text>
            <View style={styles.avatar}>
                <Image style={styles.avatar_profile} source={require('../../../assets/customer-girl(3).png')} />
                <Text style={styles.avatar_name}>Hiền Trần</Text>
            </View>

            <Pressable style={styles.btn_key} onPress={()=>{console.log("ckct")}}>
                <Image style={styles.btn_icon} source={require('../../../assets/icons8-key-security-50.png')} />
                <Text style={styles.btn_text}>Chìa khóa của tôi</Text>
            </Pressable>

            <Pressable style={styles.btn_key} onPress={()=>{console.log("cd")}}>
                <Image style={styles.btn_icon} source={require('../../../assets/icons8-settings-50.png')} />
                <Text style={styles.btn_text}>Cài đặt</Text>
            </Pressable>

            <Pressable style={styles.btn_key} onPress={()=>{console.log("ttht")}}>
                <Image style={styles.btn_icon} source={require('../../../assets/icons8-ringer-volume-50.png')} />
                <Text style={styles.btn_text}>Trung tâm hỗ trợ</Text>
            </Pressable>

            <TouchableOpacity style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            } onPress={() => {console.log("alo"); navigation.navigate('Login')}}>
                <View style={styles.btn_logout}>
                    <Text style={{
                        color: "#fff",
                    }}>ĐĂNG XUẤT</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
};
export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        marginLeft: '5%',
        width: '90%',
        
    },
    heading_profile: {
        fontSize: 30,
        fontWeight: 'normal',
        paddingBottom: '12%',
    },
    avatar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar_profile: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    avatar_name : {
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: '6%',
    },
    btn_key: {
        marginTop: '10%',
        paddingTop: '5%',
        width: '90%',
        paddingBottom: '5%',
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: '#D0C9C0',
    },
    btn_text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    btn_icon:{
        height: 30,
        width: 30,
        margin: 10,
    },
    btn_logout: {
        marginTop: '10%',
        width:'50%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#b3b3b3',
        borderRadius: 10,
    },

});
