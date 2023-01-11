import {Text, View,StyleSheet } from 'react-native';
import Buttons from '../../components/Buttons';
import { Image } from 'react-native';

const Welcome = ({navigation})=>{
    const start = ()=>{
        navigation.navigate('Search')
    }
    const pass=()=>{}
    return(
    <View style={styles.container}>
      <Text style = {styles.text}>Chào mừng bạn đến với</Text>
      <Image
        style={{width:300,height:300} }
        // source={
        //   require('@expo/snack-static/react-native-logo.png')
        // }
      />
      <Text style = {styles.text}>Bạn có muốn chúng tôi giúp bạn tìm được nơi lý tưởng để tận hưởng kỳ nghĩ này hay không?</Text>
      <View style={{marginTop:90}}></View>
      <Buttons title = 'Bắt đầu' onPress={start}></Buttons>
      <View style={{marginTop:24}}></View>
      <Buttons title = 'Bỏ qua' variant = 'link' onPress={pass}></Buttons>
    </View> 
    )
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    padding:20,
    marginTop: 20,
    display: 'flex',
    backgroundColor: '#fff',
  },
  text:{
    textAlign:'center',
    fontSize:20,
    color:'#B3B3B3',
  }
});
export default Welcome