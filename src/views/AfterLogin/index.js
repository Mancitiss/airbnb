import {Text, View,StyleSheet } from 'react-native';
const AfterLogin = ()=>{
    return(
    <View style={styles.container}>
      <Text style={styles.header}>login success</Text>
    </View> 
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
    padding:20,
    marginTop: 20,
    display: 'flex',
    backgroundColor: '#fff',
  },
});
export default AfterLogin