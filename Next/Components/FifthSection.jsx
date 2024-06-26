import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransactionInfo from './TransactionInfo'
import apple from "../assets/images/apple.png"
import spotify from "../assets/images/spotify.png"
import moneyTransfer from "../assets/images/moneyTransfer.png"
import grocery from "../assets/images/grocery.png"

const FifthSection = () => {
  return (
    <View style={styles.container}>
      <TransactionInfo iconNmae={apple} firtTextInfo="Apple Store" secondtextInfo="Entertainment"  thirdTextInfo="-$5,99"/>

      <TransactionInfo iconNmae={spotify} firtTextInfo="Spotify" secondtextInfo="Music" thirdTextInfo="-$12,99"/>

      <TransactionInfo iconNmae={moneyTransfer} firtTextInfo="Money Transfer" secondtextInfo="Transaction" thirdTextInfo="$300"/>

      <TransactionInfo iconNmae={grocery} firtTextInfo="Grocery" secondtextInfo="Shopping" thirdTextInfo="-$88"/>

    </View>
  )
}

export default FifthSection

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        
    }
})