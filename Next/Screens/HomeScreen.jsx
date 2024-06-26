import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import FirstEction from '../Components/FirstEction'
import SecondSection from '../Components/SecondSection'
import ThirdSection from '../Components/ThirdSection'
import FourthSection from '../Components/FourthSection'
import FifthSection from '../Components/FifthSection'


const HomeScreen = () => {
  return (
    <ScrollView>
       <View style={styles.container}>
      <FirstEction/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </View>
    </ScrollView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        paddingRight:20,
        paddingLeft:20,
        paddingTop:40,
        display:"flex,",
        gap:25,
    }
})