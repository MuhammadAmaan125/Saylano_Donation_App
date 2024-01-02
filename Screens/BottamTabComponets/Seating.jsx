import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
  } from 'react-native';
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
import Header from '../../Common/Header';
import Arrow from 'react-native-vector-icons/AntDesign';

  const Seating = () => {
      const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop
  
      const openAboutScreen = () => {
          navigation.push('about');
        };
  
  
  
        const openMessageScreen =()=>{
          navigation.push('chairman');
  
        }
  
    const openWebsite = () => {
      const websiteURL = 'https://www.saylaniwelfare.com/en'; // Replace with your website URL
      Linking.openURL(websiteURL);
    };
  
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* {/ header /} */}


        <Header title="Saylani"/>


<View style={{padding:30,backgroundColor:"#8dc63f",borderBottomEndRadius:70}}> 

<Text style={{color:"white",fontSize:30,fontWeight:'700',letterSpacing:10}}>
  Setting
</Text>

</View>
       
 
        {/* {/ body /} */}
  
  <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
          {/* {/ about  /} */}
  




        {/* {/  /} */}
        <TouchableOpacity
        onPress={openAboutScreen}
  style={{
    width: 100 + '%',
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#8dc63f',
    borderRadius: 10,
    padding:20
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            About
          </Text>


          <Arrow  name="arrowright" size={25} color="white" />
       
        </TouchableOpacity>
  
  
        {/* {/  /} */}
        <TouchableOpacity
        onPress={openWebsite}
          style={{
            width: 100 + '%',
            marginVertical: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#8dc63f',
            borderRadius: 10,
            padding:20          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Visit Our website
          </Text>
          <Arrow  name="arrowright" size={25} color="white" />
        </TouchableOpacity>
  
  
  {/* {/ message /} */}
  
  
  <TouchableOpacity
onPress={openMessageScreen}
          style={{
            width: 100 + '%',
            marginVertical: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#8dc63f',
            borderRadius: 10,
            padding:20
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Chairman Message
          </Text>
          <Arrow  name="arrowright" size={25} color="white" />
        </TouchableOpacity>
  </View>
  
  
  
  
  
  
      </View>
    );
  };
  
  export default Seating;
  
  const styles = StyleSheet.create({
    image: {
      width: 38,
      height: 38,
      objectFit: 'scale-down',
      backgroundColor: 'white',
      borderRadius: 30,
    },
  });
  
  // SETTING=>LANGUAGE,ABOUT =>WEBSITE ,TERM AND CONDITON
  