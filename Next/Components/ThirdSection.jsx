import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icons from '../Components/Icons'
import send from "../assets/images/send.png"
import receive from "../assets/images/recieve.png"
import loan from "../assets/images/loan.png"
import topUp from "../assets/images/topUp.png"

const ThirdSection = () => {
  return (
    <View style={styles.container}>
      <Icons iconName ={send} textInfo={'Sent'} />
      <Icons iconName ={receive} textInfo={'Receive'} />
      <Icons iconName ={loan} textInfo={'Loan'}/>
      <Icons iconName ={topUp} textInfo={'TopUp'}/>
    </View>
  )
}

export default ThirdSection

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})