import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Share } from 'react-native';

function DetailsScreen({ navigation , route}) {
  const{imgname}= route.params;
  state = {img: imgname};
  let {container, itemStyle} = styles

    const onShare = async ()=> {
      try {
        const result = await Share.share({
          url: "Image://./img1.png"
          
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return (
      <View style={container}>
        <Image style={itemStyle} source={state.img}/>
        <View style={{ marginTop: 20 }}>
      <Button onPress={onShare} title="Share" />
    </View>
      </View>
    );
  }
  export default DetailsScreen;
  const styles= StyleSheet.create({
    container:{
      flex: 1,
      paddingTop:5,
    },
    
    itemStyle:{
      alignItems:"center",
      justifyContent:"center",
      height:300,
      width:"100%",
    },
    })