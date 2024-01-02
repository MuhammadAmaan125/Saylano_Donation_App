import { View, Text,StyleSheet,Image, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.header}>




    <View>
    <Text
        style={styles.heading}>
      Welcome to Saylani
      </Text>
    </View>
  <View
      style={{
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
        alignItems: 'center',
      }}>
      <Image
        source={require('../Assets/images/SaylaniHD.png')}
        style={styles.image}
      />

     
    </View>

   
  </View>
  )
}

export default Header



const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
      padding: 5,
  backgroundColor:"#0369a1",
  gap:10

    },
    image: {
      width: 50,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 30,
      borderWidth:0.7,
      borderColor:"gray"
    },
  heading:{
    fontSize: 15,
    letterSpacing: 3,
    fontWeight: 'bold',
    color: 'white',
  }    
  });
  