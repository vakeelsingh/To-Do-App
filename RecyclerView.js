import React, { Component } from 'react';
import {TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Alert} from 'react-native';

const datalist=[
  {key:'1', image:require("./img1.png")},
  {key:'2', image:require("./img2.png")},
  {key:'3', image:require("./img3.jpeg")},
  {key:'4', image:require("./img1.png")},

]
const numColumns=2;
const WIDTH=Dimensions.get('window').width

function RecyclerList({ navigation, route}) {
  
  //Empty row handle
    formatData= (datalist, numColumns) =>{
    const totalRows = Math.floor(datalist.length / numColumns)
    let totalLastRow=datalist.length-(totalRows * numColumns)
        while(totalLastRow !== 0 && totalLastRow !==numColumns){
            datalist.push({key:"blank", image:"blank", empty: true })
            totalLastRow++
        }
        return datalist
    }
    //
  _renderItem=({item, index}) => {
    let {itemStyle, itemText, itemInvisible, itemimg} = styles
    if(item.empty){
        return <View style={[itemStyle, itemInvisible]}></View>
    }
    return(
      <View style={itemStyle}>
       
        <TouchableOpacity style={itemimg} onPress={() =>navigation.navigate('Details', 
        {
          imgname:item.image
          
        })}>
          <Image style={itemimg} source={item.image}/>
          </TouchableOpacity>
        </View>
    )
  }

    let {container}= styles
    return(
      <View style={container}>
          <FlatList
            data={formatData(datalist, numColumns)}
            renderItem={_renderItem}
            keyExtractor={(item, index)=> index.toString()}
            numColumns={numColumns}
            
          />
          </View>
    )
}

const styles= StyleSheet.create({
container:{
  flex: 1,
  paddingTop:5,
},
container2:{
  flex: 1,
  margin: 10
},

itemStyle:{
  padding:5,
  alignItems:"center",
  justifyContent:"center",
  height:100,
  flex:1,
  margin:1,
  height: WIDTH / numColumns
},

itemText:{
  color:'#fff',
  fontSize:30,
  alignItems:"center"
},

itemimg:{
   borderWidth:2,
   width:"100%",
   height: "100%",
   alignItems:"center",
  justifyContent:"center",
  },

itemInvisible:{
  backgroundColor: 'transparent'
}

})
export default RecyclerList;