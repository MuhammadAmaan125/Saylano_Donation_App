import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/FontAwesome5';
import Login from 'react-native-vector-icons/AntDesign';

// Firebase Imports

import auth from '@react-native-firebase/auth'
import { successAlert } from '../Common/Alert';




const SignUp =  ({navigation}) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);





  const handlenameChange = (name) => {
    setname(name);

  
  };




  const handleTextChange = (email) => {
    setEmail(email);
  };
  const handlePasswordChange = (inputPassword) => {
    setPassword(inputPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  

 

  

 


// Firebase Work 


const createEmailPassword = () => {
  // Basic validation
  if (!email || !password) {
    successAlert("Error","Email and password are required!","error")
    return;
  }



  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async () => {
      successAlert('Conratulation','User account created & signed in!','success');

      const n = await AsyncStorage.setItem('name',name);


    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        successAlert("Error","That email address is already in use!","error");
      }

      if (error.code === 'auth/invalid-email') {
        successAlert("Error","That email address is invalid!","error");
      }


    });
};


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView>
      <View style={styles.topcontainer}>
        <View style={styles.topchild}>
        <Image
       source={require('../Assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.topchildtext}>Saylani Welfare Trust</Text>
        </View>
      </View>
<View style={styles.bottom}>

<View style={styles.bottomchild}>

{/* name field */}








{/*Full Name field */}





<View style={styles.inputContainer}>

      <View style={styles.iconContainer}>
        <Icon name="user" size={17} color="#8dc63f" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your Full Name"
        placeholderTextColor="gray"
        onChangeText={handlenameChange}
        value={name}
      />
    </View>






{/* email field */}


<View style={styles.inputContainer}>

      <View style={styles.iconContainer}>
        <Icon name="envelope" size={17} color="#8dc63f" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="gray"
        onChangeText={handleTextChange}
        value={email}
      />
    </View>


    {/* password field */}

    <View style={styles.inputContainer}>
    <View style={styles.iconContainer}>
        <Lock name="lock" size={17} color="#8dc63f" />
      </View>
   
<TextInput
  style={styles.input}
  secureTextEntry={!isPasswordVisible}
  placeholder="Enter your Password"
  placeholderTextColor="gray"
  onChangeText={handlePasswordChange}
  value={password}
/>

<TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer2}>
        <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#8dc63f" />
      </TouchableOpacity>
</View>
<Text style={{fontSize:12,color:"gray",textAlign:"left",marginLeft:30}}>Forget Password ?</Text>



{/* login button  */}


<TouchableOpacity onPress={createEmailPassword} style={styles.loginButton} activeOpacity={0.7}>
        <Text style={styles.loginButtonText}>SignUp</Text>
        <Login name="login" size={15} color="white" />
      </TouchableOpacity>
      <Text style={{fontSize:12,color:"gray",textAlign:"center",marginTop:0}}>You Have Account ? <Text onPress={()=>navigation.push("Login")} style={{color:"#8dc63f",fontSize:12,fontWeight:600 }}> SignIn</Text></Text>
{/* login with google and facebook */}


<View style={{display:"flex",flexDirection:"row",marginTop:20,alignItems:"center",gap:10,justifyContent:"center"}}>

<Image
       source={require('../Assets/images/google.webp')}
        style={styles.iconimage}
      /> 
      
      <Text style={{color:"gray",fontSize:12}}>Login with Google Account</Text>
</View>
    </View>
</View>
</ScrollView>
    </SafeAreaView>
  )
}





export default SignUp

const styles = StyleSheet.create({

  topcontainer:{
      backgroundColor:"white",
      borderBottomLeftRadius: 30, // Set your desired bottom left border radius value
      borderBottomRightRadius: 30, // Set your desired bottom right border radius value
      height:300,
      borderWidth:0.5,
      borderColor:"gray",   
  }
,
bottom:{

},

topchild:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
marginTop:40  
},
bottomchild:{
paddingHorizontal:20,
paddingVertical:30

},
image: {
  width: 350,
  height: 200,
  objectFit:"contain"
},
topchildtext:{
  fontSize:20,
  color:"#8dc63f",
  fontWeight:"800"
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 50,
  margin: 10,
  padding: 1,
  alignItems:"center",
  backgroundColor:"white"
  
},
iconContainer: {
  marginHorizontal:10
},
iconContainer2: {
  marginLeft: 0,
},
input: {
  color:"black",

  height: 30,
  margin: 10,
  padding: 2,
  width: 200,
 
},
loginButton: {
  backgroundColor: '#8dc63f',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:"center",
  gap:10,
  padding: 15,
  margin: 10,
  borderRadius: 30,
  marginTop: 20,
  
},
loginButtonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign:"center",

},
iconimage:{
  width: 50,
  height: 50,
  borderRadius: 30,
  objectFit:"contain"
}
})