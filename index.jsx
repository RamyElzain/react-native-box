import React from "react";
import {Text,View,StyleSheet,ScrollView} from "react-native";

const App = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}horizontal 
      showsHorizontalScrollIndicator={false}>
      <View style={styles.box}>
        <Text style={styles.text} >1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text} >2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text} >3</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text} >4</Text>
      </View>

      </ScrollView>
    <View style={styles.header}></View>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:40,
  },
  box:{
    height:100,
    width:100,
    backgroundColor:'darkblue',
    margin:'auto',
    marginTop:40, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
  },

  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold', 
  },
  header:{
    height:100,
    width:'100%',
    backgroundColor:'red',
    marginTop:40, 

  }
   
  
  
})

export default App;
