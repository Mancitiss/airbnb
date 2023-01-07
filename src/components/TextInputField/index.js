import { useState } from "react";
import {StyleSheet, TextInput,View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "react-native";
import Buttons from "../Buttons";
import { FontAwesome5 } from '@expo/vector-icons';


const TextInputField = (props) => {
  const [ShowDateModal, setShowDateModal] = useState(false);
  if(props.keyboardType==='date-pad'){
    return (
      <>
        <View style={{flexDirection:'row', width:'100%', borderBottomWidth: 1,borderColor: 'rgba(112, 112, 112,0.7)'}}>
        <TextInput
          editable={false}
          style={styles.date}
          defaultValue={props.defaultValue?
            props.defaultValue.getDate()+"/"+props.defaultValue.getMonth()+1+"/"+props.defaultValue.getFullYear()
            :""}
          placeholder='dd/mm/yy'
          keyboardType={props.keyboardType}
          onChangeText={props.onChange}
        >
        </TextInput>
        <View style={{width:30, height:30, marginLeft: 'auto'}}>
        
        <Buttons 
          variant = 'icon' 
          onPress={()=>{setShowDateModal(true)}}
          title={<FontAwesome5
            color='#B3B3B3'
            size='32'
            name="calendar-alt"
            />}
          >
        </Buttons>
        </View>
        </View>
  
      {
        ShowDateModal&&
        <RNDateTimePicker
        mode="date"
        style={{
        shadowColor: '#fff',
        shadowRadius: 0,
        shadowOpacity: 1,
        shadowOffset: { height: 0, width: 0 },
      }}
      value={props.defaultValue?props.defaultValue:new Date()}
      onChange={(event, date) => {
        if(event.type='dismissed'){setShowDateModal(false)}
        if(event.type='set'){
          props.onChange(date)
          setShowDateModal(false)
        }
      }}
       />
      }
      </>
    )
  }else{
    return (
    <>
      <TextInput
        style={styles.text}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={props.onChange}
      />
      {props.error&&<Text style={styles.error} >{props.error}</Text>}
    </>
  )}
};
const styles = StyleSheet.create({
  text:{
    fontSize:20,
    color:'#000000',
    opacity:0.7,
    height:36,
    width: '100%',
    borderColor: 'rgba(112, 112, 112,0.7)',
    borderBottomWidth: 1,
  },
  error:{
    color:'red',
    opacity:0.7
  },
  date:{
    fontSize:20,
    color:'#000000',
    opacity:0.7,
    height:36,
    width: '85%',
    borderColor: 'rgba(112, 112, 112,0.7)',
  }
});

export default TextInputField;