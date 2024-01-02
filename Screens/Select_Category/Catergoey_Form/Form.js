import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Text, StyleSheet, Image, ScrollView,Button,TouchableOpacity } from "react-native";
import Input from "../../../Common/Input";

import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Header from "../../../Common/Header";
import { successAlert } from "../../../Common/Alert";


const Form = ({route}) => {

const {req,donate} =  route.params



  // Sahi tareeke se useState ka istemal
  const [data, setData] = useState({
    amount: "",
    name: "",
    phone: "",
    email: "",
    country: "",
    additionalinfo: "", // corrected the typo
  });

  const [error, setError] = useState("");

  const handleSubmitDetails=async ()=>{


    if (
      data.amount === "" ||
      data.name === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.country === "" ||
      data.additionalinfo === ""
    ) {
      setError("All fields are required");
      successAlert("Error","All fields are required","error","gray")
      return; 
    }


if(req == "request"){
  let key = firestore().collection('user').doc().id;

  let obj = {
    amount:data.amount,
    name:data.name,
    phone:data.phone,
    email:data.email,
    country:data.country,
    additionalinfo:data.additionalinfo
  }

  await database()
      .ref(`/users/${req}/${key}`)
      .set(obj)
      .then(() =>{
        console.log('Data set.')

        successAlert("Conratulaton","Thanks For Donation","success")

        setData("") 


      } );
}
else{
  let key = firestore().collection('user').doc().id;

  let obj = {
    amount:data.amount,
    name:data.name,
    phone:data.phone,
    email:data.email,
    country:data.country,
    additionalinfo:data.additionalinfo
  }

  await database()
      .ref(`/users/${donate}/${key}`)
      .set(obj)
      .then(() => {

        console.log('Data set.')


        successAlert("Conratulaton","Your Request is Submited","success")

        setData("") 
      });
}

       







  }



  return (




    <View style={{ flex: 1 }}>
<Header title="Saylani" />

<ScrollView>



      <View style={{ flexDirection: "column", gap: 20, padding: 20 }}>
        <Input
          label="Amount"
          placeholder="Enter Amount-(PKRs)"
          keyboardType="numeric"
          value={data.amount}
          onChangeText={(text) => setData({ ...data, amount: text })}
        />

        <Input
          label="Donor name"
          placeholder="Enter Full Name"
          value={data.name}
          onChangeText={(text) => setData({ ...data, name: text })}
        />

        <Input
          label="Phone"
          placeholder="Enter Contact"
          keyboardType="numeric"
          value={data.phone}
          onChangeText={(text) => setData({ ...data, phone: text })}
        />

        <Input
          label="Email"
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />

        <Input
          label="Country"
          placeholder="Enter Country Name"
          value={data.country}
          onChangeText={(text) => setData({ ...data, country: text })}
        />

        <Input
          label="Additional Info"
          placeholder="Please Enter Additional info"
          value={data.additionalinfo}
          onChangeText={(text) => setData({ ...data, additionalinfo: text })}
        />




{/* <Button title="Submit" style={{height:90}} onPress={() => handleSubmitDetails()}>
  
  </Button> */}

<TouchableOpacity onPress={handleSubmitDetails} style={{padding:20,backgroundColor:"#8dc63f",borderTopRightRadius:30,borderBottomLeftRadius:30,}}>
<Text style={{color:"white",fontSize:17,textAlign:"center"}}>
  Submit
</Text>
</TouchableOpacity>



      </View>

      </ScrollView>
    </View>





  );
};

export default Form;

const style = StyleSheet.create({
  Searchbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#0369a1',
    padding: 15,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
