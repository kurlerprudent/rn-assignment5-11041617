import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import Card from "../assets/images/Card.png"

const SecondSection = () => {
  return (
    <View>
      <Image source={Card}/>
    </View>
  )
}

export default SecondSection

const styles = StyleSheet.create({})