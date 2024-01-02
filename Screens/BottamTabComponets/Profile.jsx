import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../Common/Header';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

const nav =useNavigation()

  const [file, setFile] = useState(null); // Corrected: use 'setFile' instead of 'setfile'
  const [uploadProgress, setUploadProgress] = useState(0);
  const [image, setImage] = useState(
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
  );

  const openCamera = () => {
    const options = {
      mediaType: 'photo', // You can use 'photo' or 'video'
      quality: 0.8, // Image quality (0 to 1)
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled the camera.');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Use the image from the camera here
        console.log('Image URI: ', response.assets[0].uri);
        setFile(response.assets[0].uri); // Corrected: use 'setFile' instead of 'setfile'
        imageUpload(response.assets[0].uri);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo', // You can use 'photo' or 'video'
      quality: 0.8, // Image quality (0 to 1)
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled the camera.');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Use the image from the camera here
        console.log('Image URI: ', response.assets[0].uri);
        setFile(response.assets[0].uri); // Corrected: use 'setFile' instead of 'setfile'
        imageUpload(response.assets[0].uri);
      }
    });
  };

  const imageUpload = (imageurl) => {
    const reference = storage().ref('images/' + new Date().getTime() + '.jpg');
    try {
      const uploadTask = reference.putFile(imageurl);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading image: ', error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            const img_url = downloadURL;
            setImage(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

 

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={{  borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <Header />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 350,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <View style={styles.imageContainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={{
                    uri: `${image}`,
                  }} // Replace with the actual path to your image
                  style={{ width: 250, height: 250, borderRadius: 200, objectFit: 'cover', borderWidth: 4, borderColor: '#f8fafc' }}
                />
                <Badge
                  onPress={() => openGallery()}
                  style={{
                    position: 'absolute',
                    top: 30,
                    right: 13,
                    backgroundColor: '#0369a1',
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#f8fafc',
                  }}
                >
                  <Icon name="edit-2" size={17} color="#f8fafc" style={{ margin: 10 }} />
                </Badge>
              </View>
            
            </View>
          </View>
        </View>

<View style={{padding:20}}>

<Text style={{fontSize:25}}>
 Profile
</Text>

<Text style={{fontSize:20}}>
  Name : Ali
</Text>
<Text style={{fontSize:20}}>
  Email : Ali@gmail.com
</Text>

</View>


        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20, alignItems: 'center' }}>
       

          <TouchableOpacity onPress={()=>nav.replace("Login")}  style={styles.loginButton}>
            <Text style={{color:"white"}}>LogOut</Text>
          </TouchableOpacity>
        </View>
        <Text>{'\n'} {'\n'} {'\n'} {'\n'}</Text>
      </ScrollView>
    </View>
  );
};

export default Profile;

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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: '#8dc63f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    margin: 10,
    borderRadius: 30,
    marginTop:20 
  },

})
  
