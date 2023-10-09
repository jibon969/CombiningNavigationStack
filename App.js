import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Hello World !</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  title:{
    backgroundColor:"red", padding:10, textAlign:"center", fontSize:20, color:"#FFF"
  }
})