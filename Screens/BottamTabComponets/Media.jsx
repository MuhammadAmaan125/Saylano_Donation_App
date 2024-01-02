import { StyleSheet, Text, View,Image ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import Shear from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Header from '../../Common/Header';
import YoutubePlayer from "react-native-youtube-iframe"
const Media = () => {


  const [iconColor, setIconColor] = useState('gray');




  const [post, setpost] =useState(null);



  
  useEffect(() => {
    const onValueChange = database()
      .ref('/addVideo/')
      .on('value', snapshot => {
      
        const userItem = snapshot.val();
        let items = Object.values(userItem);

        setpost(items)

      
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/addVideo/').off('value', onValueChange);
  }, []);
    


  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
     
     {/* Header */}


 


{/* heading */}
<ScrollView nestedScrollEnabled={true}>


<Header title="Saylani Media"/>


<View style={{marginHorizontal:15,marginVertical:20}}>
          <Text style={{color: 'gray', fontSize: 20, fontWeight: '500'}}>
 Saylani All Media Video
          </Text>
        </View>

{/* Post Videos */}



<FlatList
data={post}
renderItem={({item}) => (
    <View style={{flexDirection: 'column', marginVertical:5,backgroundColor:"#f3f4f6",paddingVertical:5,borderWidth:0.3,borderRadius:12}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <View
        style={{flexDirection: 'row', gap: 10, alignItems: 'center',marginBottom:10}}>
        <Image
source={require('../../Assets/images/SaylaniHD.png')}

          style={{width: 46, height: 46}}
        />

        <View>
          <Text style={{fontSize: 17,color:"black"}}>Saylani Media</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text style={{fontSize: 10,color:"black"}}>{item.title}</Text>
          </View>
        </View>
      </View>

    </View>
    <View style={{marginHorizontal:10}}>
    <Text style={{fontSize: 15,color:"black"}}>{item.Description}</Text>

    </View>

    {/* Image Post */}
    <View style={{padding: 10}}>
    <YoutubePlayer
        height={200}
        play={true}
        videoId={item.Youtubeid}
      />
    </View>
    {/* Like Shear */}
  <View style={{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
  }}>
   
   
  <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
     
      }}>
<Like name="like2" size={25} color={iconColor} />

<Comment name="commenting-o" size={25} color={iconColor} />

    </View>
   
    <View style={{
        alignItems: 'center',
      }}>

    <Shear name="arrow-redo-outline" size={25} color={iconColor} />

    </View>
  </View>

  </View>
)}
keyExtractor={item => item.key}
style={{marginTop: 0}}
/>


<Text>

        {'\n'} {'\n'}
        {'\n'} {'\n'}
       
       
</Text>
</ScrollView>

    </View>
  )
}

export default Media

const styles = StyleSheet.create({
    Searchbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0369a1',
        padding: 15,
        paddingHorizontal: 5,
        borderBottomLeftRadius: 15, // Set your desired bottom left border radius value
        borderBottomRightRadius: 15, // Set your desired bottom right border radius value
      },
      image: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
      },
      
})