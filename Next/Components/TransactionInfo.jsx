import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'

const TransactionInfo = ({iconNmae, firtTextInfo, secondtextInfo, thirdTextInfo}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageAndText}>
      <View style={styles.iconContainer}>
        <Image source={iconNmae}/>
      </View>

        
            
        
      <View>
        <Text style={{fontSize:18, color:"#030301", fontWeight:'600'}}>{firtTextInfo}</Text>
        <Text style={{opacity:0.5, letterSpacing:-1}}>{secondtextInfo}</Text>
      </View>
      </View>

      <View>
      <Text style={{fontSize:18,fontWeight:'700', letterSpacing:1}}>{thirdTextInfo}</Text>
      </View>
    </View>
  )
}

export default TransactionInfo

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20
    },
    iconContainer:{
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        backgroundColor:"lightgrey"
    },
    imageAndText:{
        display:"flex",
        flexDirection:"row",
        gap:20,
        alignItems:"center"
    }
})