import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Card from "../assets/images/profile.png"
import search from "../assets/images/search.png"

const FirstEction = () => {

    
  return (
    <View style={styles.container}>
      <View style={styles.textAndImageContainer}>

    
            <View>
                <Image source={Card}/>
            </View>
            <View>
                <Text  style={{opacity:0.4}}>Welcome back</Text>
                <Text style={{fontSize:18}}>Don Little</Text>
            </View>
      </View>    
            <View style={styles.searchContainer}>
                <Image source={search}/>
            </View>
      
    </View>
  )
}

export default FirstEction

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textAndImageContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:15
    },
    searchContainer:{
        width:30,
        height:30,
        backgroundColor:"lightgrey",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30
    }
})