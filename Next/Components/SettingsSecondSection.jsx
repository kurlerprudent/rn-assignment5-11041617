import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SettingsSecondSection = ({textInfo}) => {
  return (
    <View style={styles.container}>
        <View style={styles.nextContainer}>
        <Text style={{fontSize:19, color:'white'}}>{textInfo}</Text>
        <AntDesign name="right" size={24} color="white" />
        </View>
      
    </View>
  )
}

export default SettingsSecondSection

const styles = StyleSheet.create({
        container:{
            display:"flex",
            flexDirection:"column",
            justifyContent:'space-between',
            alignItems:'center',
            
        },
        nextContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%',
            borderBottomWidth:0.3,
            borderColor:'lightgrey',
            marginBottom:20,
            paddingBottom:8
        }
})