import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsHeroSection = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:'600', color:'white'}}>Settings</Text>
    </View>
  )
}

export default SettingsHeroSection

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent:'center',
        height:200
        
    }
})