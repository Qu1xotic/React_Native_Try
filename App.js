import React, { Component } from 'react'
import { Text, StyleSheet, View,} from 'react-native'
import SOSButton from './components/SOSButton'
import Header from './components/Header'
export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head} >
          <Header />
        </View>
        <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
          <SOSButton />
          <Text> You know I can help!</Text>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop:23,
  },
  head:{
    marginTop:20,
  }
})
