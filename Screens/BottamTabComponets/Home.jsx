import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Swiper from 'react-native-swiper';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import Shear from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Header from '../../Common/Header';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [iconColor, setIconColor] = useState('gray');

  const handleSearch = () => {
    // Implement your search logic here using the searchText state
    console.log('Searching for:', searchText);
    // You can perform your search-related actions here
  };


  const handleIconClick = () => {
    // Toggle the color on click
    const newColor = iconColor === 'black' ? 'red' : 'black';
    setIconColor(newColor);
  };



  const [post, setpost] =useState(null);


console.log(post)
  
  useEffect(() => {
    const onValueChange = database()
      .ref('/addpost/')
      .on('value', snapshot => {
      
        const userItem = snapshot.val();
        let items = Object.values(userItem);

        console.log(items)
        setpost(items)

      
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/addpost/').off('value', onValueChange);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
        <ScrollView>

  
         {/* header  */}
         <Header title="Saylani Home" />

   
{/* Slider */}
<View style={{justifyContent: 'center'}}>
  <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} showsPagination={false}>
    <View style={styles.slide1}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1698391741/website-images/dynamic/23d0e86a-9bd9-42d5-adf6-05badafab074.jpg',
        }} // Replace with the actual path to your image
        style={{
          width: 100 + '%',
          height: 220,
          objectFit: 'fill',
          borderRadius: 20,
        }}
      />
    </View>
    <View style={styles.slide2}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c6jenfZq1R0w9iEPopo-3ZPjxZTKOrS18Q&usqp=CAU',
        }} // Replace with the actual path to your image
        style={{
          width: 100 + '%',
          height: 220,
          objectFit: 'fill',
          borderRadius: 20,
        }}
      />
    </View>
    <View style={styles.slide3}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1678691645/website-images/dynamic/8517e89c-e41d-4868-8c92-3bbc0d1f9339.jpg',
        }} // Replace with the actual path to your image
        style={{
          width: 100 + '%',
          height: 220,
          objectFit: 'fill',
          borderRadius: 20,
        }}
      />
    </View>
  </Swiper>
</View>
<View style={{padding:10}}>
{/* Cards */}

<View style={{marginVertical: 10}}>
  <Text style={{color: 'gray', fontSize: 17, fontWeight: '500'}}>
    What We are Doing
  </Text>
</View>

<ScrollView horizontal={true} >
  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927889/website-images/static/44.png',
      }} // Replace with the actual path to your image
      style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight: 500, color: '#0369a1'}}>
      Welfare
    </Text>
  </View>

  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927857/website-images/static/41.png',
      }} // Replace with the actual path to your image
      style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight:500, color: '#0369a1'}}>
      Medical
    </Text>
  </View>

  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927849/website-images/static/39.png',
      }} // Replace with the actual path to your image
      style={{width: 40, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight: 500, color: '#0369a1'}}>
      Online Sadqah
    </Text>
  </View>

  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927853/website-images/static/40.png',
      }} // Replace with the actual path to your image
      style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight: 500, color: '#0369a1'}}>
      RO plant
    </Text>
  </View>

  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927923/website-images/static/48.png',
      }} // Replace with the actual path to your image
      style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight:500, color: '#0369a1'}}>
      Education
    </Text>
  </View>

  <View style={styles.smallcard}>
    <Image
      source={{
        uri: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1646927876/website-images/static/43.png',
      }} // Replace with the actual path to your image
      style={{width: 60, height: 60, objectFit: 'fill', marginTop: 10}}
    />
    <Text style={{fontSize: 12, fontWeight:500, color:"#0369a1"}}>
      Food
    </Text>
  </View>
</ScrollView>






<View style={{marginVertical: 10}}>
  <Text style={{color: 'gray', fontSize: 17, fontWeight: '500'}}>
  Saylani All Media Post

  </Text>
</View>

<ScrollView nestedScrollEnabled={true}>


{/* Post Cards */}



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
      <Image
        source={{
          uri: `${item.Image}`,
        }}
        style={{width:100+"%" , height:200, objectFit: 'cover',borderRadius:12}}
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



</ScrollView>

<Text>
{"\n"}   {"\n"}   
</Text>


<Text>
{"\n"}     
</Text>
   </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    width: 280,
    borderColor: 'White',
    borderWidth: 1,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,

    marginRight: 10,
    paddingHorizontal: 8,
  },

  // swiper style start
  wrapper: {
    height: 200,
  },
  wrapper2: {
    height: 300,
    backgroundColor:"#e5e7eb"
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  // swiper style and
  smallcard: {
    width: 100,
    height: 100,
    backgroundColor: '#f1f5f9',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth:0.7,
    borderColor:"#0369a1",
    borderRadius:5
  },
  Mediamcard:{
    width: 110,
    height: 145,
    backgroundColor: '#f1f5f9',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  }
});
