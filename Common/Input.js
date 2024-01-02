import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          placeholderTextColor="gray"
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText} // Callback function from parent
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    color:"white",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius:30,borderBottomLeftRadius:30,borderWidth:1,borderColor:"#8dc63f"
  },
  label: {
    fontSize: 10,
    color:"gray"
  },
});

export default Input;
