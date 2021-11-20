import { stylingProps } from "native-base/lib/typescript/theme/tools";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faComment} from '@fortawesome/free-solid-svg-icons'

export default function Board ({route}){
  const Row =()=>{
  return(
     <View style={styles.row}>
        <View
        style={styles.box}/>
        <View
        style={styles.box}/>
        <View
        style={styles.box}/>
    </View>
  )
}
   return( 
<View style={styles.container}>
   <Text style={styles.player}>Player: {route.params.paramKey} </Text>
<View style={styles.board}>
     <Row/>
     <Row/>
     <Row/>
</View>
    <FontAwesomeIcon icon={ faComment } size={ 70 } style={styles.icon}/>
</View>
)}


const styles =StyleSheet.create({
container:{
         flex:1,
  },
board:{
         flex:1,
         marginTop:40,
     },
row:{
         flexDirection:'row',
         justifyContent:'center',
     },
box:{
         width: 100,
         height: 100,
         borderWidth:1,
         borderColor:'black',
}  ,
player:{
        padding:20,
        fontSize:16,
        fontWeight:'bold',
},
icon:{
        position:'absolute',
        bottom:50,
        right:30,
        color:'#27bdac',
}
 })