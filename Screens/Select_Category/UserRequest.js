import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const UserRequest = ({navigation,route}) => {

  const {req}  = route.params




  return (
    <View style={{flex: 1,flexDirection:"column", paddingVertical:30, gap:30,justifyContent:"center",alignItems:"center",backgroundColor:"#e0f2fe"}}>
      
      <TouchableOpacity 
      onPress={()=>navigation.push("Form",{req})}
      style={{width:200,height:200,borderTopRightRadius:30,borderBottomLeftRadius:30,justifyContent:"center",alignItems:"center",borderWidth:2,borderColor:"#8dc63f"}}>
      <Image
        source={require('../../Assets/images/blood.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Need Blood </Text>
      </TouchableOpacity>




      
      <TouchableOpacity
      onPress={()=>navigation.push("Form",{req})}
      style={{width:200,height:200,borderTopRightRadius:30,borderBottomLeftRadius:30,justifyContent:"center",alignItems:"center",borderWidth:2,borderColor:"#8dc63f"}}>
      <Image
        source={require('../../Assets/images/sadqah.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Need Other help</Text>
      </TouchableOpacity>



    </View>
  )
}

export default UserRequest

const styles = StyleSheet.create({})