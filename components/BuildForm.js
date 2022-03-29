import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import YubinButton from "./CustomComponent/YubinButton";

const BuildForm = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>What is your name?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="John Doe"
      />
      <YubinButton
        text="Say hello"
        handlePress={() => {
          alert("Hello " + name);
          setName("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default BuildForm;
