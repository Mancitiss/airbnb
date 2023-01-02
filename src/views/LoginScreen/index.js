import { StyleSheet, Text, View } from 'react-native';
import TextInputField from '../../components/TextInputField';
import Buttons from '../../components/Buttons';

const LoginScreen = ({navigation})=>{
    const login = ()=>{
      navigation.navigate('AfterLogin')
    }
    return(
    <View style={styles.container}>
      <Text style={styles.header}>đăng nhập</Text>
      <TextInputField placeholder='Email hoặc số điện thoại'/>
      <TextInputField placeholder='Mật khẩu'/>
      <View style={{marginTop:70}}></View>
      <Buttons title = 'Đăng nhập' onPress = {login}></Buttons>
      <View style={{marginTop:24}}></View>
      <Buttons title = 'Bạn quên mật khẩu' variant = 'link'></Buttons>
      <Separator></Separator>
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:70}}>
        <View style={{width:'48%'}}>
            <Buttons title = '' variant = 'ghost'></Buttons>
        </View>
        <View style={{width:'4%'}}>
        </View>
        <View style={{width:'48%'}}>
            <Buttons title = '' variant = 'ghost'></Buttons>
        </View>
      </View>
    </View> 
    )
}
const Separator = ()=>{
    return(
    <>
    {/* <View style={styles.separator} /> */}
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:70}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#707070'}} />
        <View>
            <Text style={{marginHorizontal:7, textAlign: 'center', fontSize:14}}>Hoặc đăng nhập với</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#707070'}} />
    </View>
    </>
       
        )
}
const styles = StyleSheet.create({
    header: {
      textTransform: 'uppercase',
      alignSelf:'flex-start',
      fontSize:50,
      color: '#A38F8B',
    },
    container: {
      height:'100%',
      padding:20,
      marginTop: 20,
      display: 'flex',
      backgroundColor: '#fff',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });
export default LoginScreen