import { StyleSheet, Text, View,Image, ScrollView ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'



const Donate = ({route,navigation}) => {

const {donate} = route.params

    const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text) => {
    setInputValue(text);
  }

  const handleButtonPress = () => {
    // Handle button press logic here
    console.log('Button Pressed');
  };





  return (
    <ScrollView style={{backgroundColor:"white"}}>
    <View style={{flex: 1,flexDirection:"row",flexWrap:"wrap", paddingVertical:30, gap:30,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      
      
      
      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,borderTopRightRadius:30,borderBottomLeftRadius:30,borderWidth:2,borderColor:"#8dc63f",justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/gaza.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Gaza Saport</Text>
      </TouchableOpacity>




 
      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,borderTopRightRadius:30,borderBottomLeftRadius:30,borderWidth:2,borderColor:"#8dc63f",justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/blood.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Blood Bank</Text>
      </TouchableOpacity>





      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,borderTopRightRadius:30,borderBottomLeftRadius:30,borderWidth:2,borderColor:"#8dc63f",justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/family.png')}
        style={{width:90,height:90}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Family Kifalat</Text>
      </TouchableOpacity>



      <TouchableOpacity  onPress={()=>navigation.push("Form",{donate})} style={{width:130,height:170,borderTopRightRadius:30,borderBottomLeftRadius:30,borderWidth:2,borderColor:"#8dc63f",justifyContent:"center",alignItems:"center"}}>
      <Image
        source={require('../../Assets/images/sadqah.png')}
        style={{width:90,height:90,objectFit:"fill"}}
      />

<Text style={{color:"gray",fontSize:15,fontWeight:"800",marginVertical:10}}>Sadqah/Aqiqah</Text>
      </TouchableOpacity>




 



    





      
    </View>
    </ScrollView>

  )
}

export default Donate

const styles = StyleSheet.create({

  
})