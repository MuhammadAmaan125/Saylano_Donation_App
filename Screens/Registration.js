import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Registration = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white',justifyContent:"center",alignItems:"center"}}>
      


<TouchableOpacity 
onPress={()=>navigation.push("UserRequest",{req:"request"})}
style={{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:30 ,width:80+"%",backgroundColor:"#8dc63f",borderTopRightRadius:30,borderBottomLeftRadius:30}}>

<Image
        source={require('../Assets/images/gat.png')}
        style={{width:150,height:150,objectFit:"cover"}}
      />
<Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Request for help</Text>
</TouchableOpacity>
<Text>

        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>

<TouchableOpacity
onPress={()=>navigation.push("Donate",{donate:"donate"})}
style={{flexDirection:"column",justifyContent:"center",alignItems:"center",padding:30 ,width:80+"%",backgroundColor:"#8dc63f",borderTopRightRadius:30,borderBottomLeftRadius:30}}>

<Image
        source={require('../Assets/images/donate.png')}
        style={{width:150,height:150,objectFit:"cover"}}
      />
<Text style={{fontSize:20,fontWeight:"900",color:"white"}}>Donation</Text>
</TouchableOpacity>

    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})