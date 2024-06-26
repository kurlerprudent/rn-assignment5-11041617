import { StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'

const Icons = ({iconName, textInfo}) => {
  return (
    <View style={styles.bigContainer}>
        <View style={styles.container}>
      <Image source={iconName} style={{width:"40%"}}/>
      
    </View>
    <Text>{textInfo}</Text>
    </View>
    
    
  )
}

export default Icons

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:40,
        height:40,
        backgroundColor:"powderblue",
        borderRadius:30
    },
    bigContainer:{
        display:"flex",
        gap:6
    }
})