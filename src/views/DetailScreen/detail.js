import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const images = [
  'https://a0.muscache.com/im/pictures/3f02bdf7-cbb7-41b5-9968-05e04b779961.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/04e58a6c-f18b-4565-8059-17c7014f4689.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/704f847f-41dc-4b04-bd0f-51c93e9157f0.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/22eae833-90da-423b-babc-d1c4562385d3.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/b37d638d-e8bb-4687-9a7c-c29deb01a280.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/d02aa9e0-f782-40c8-80b0-28d1c5c96a8e.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/3cac8936-90f8-4304-86eb-40750d72ab12.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/70ddc7b8-695d-4563-acc1-be525ddf5e4f.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/6c6119db-4914-4edb-ad56-bcdc84a791aa.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/8ac4db50-8089-4863-aea8-bbfc2c6d3f00.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/d6b4a83e-b3d9-4810-89c9-2c65b3d6b109.jpg?im_w=720',
]
export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 50}}> {
        images.map((item, index) => (
          return (
            <Image 
            source={{uri: 'https://a0.muscache.com/im/pictures/3f02bdf7-cbb7-41b5-9968-05e04b779961.jpg?im_w=1200'}}
            style={{width: '100%', height: 300, resizeMode: 'contain'}} />
          );
        ))
      }
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
