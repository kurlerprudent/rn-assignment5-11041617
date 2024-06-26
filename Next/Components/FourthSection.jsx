import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FourthSection = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18}}>Transaction</Text>
      <Text style={{color:"00D9C0", opacity:0.8}}>See all</Text>
    </View>
  )
}

export default FourthSection

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})