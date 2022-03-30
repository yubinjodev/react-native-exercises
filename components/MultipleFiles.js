import React from "react";
import { View, Text } from "react-native";
import YubinButton from "./CustomComponent/YubinButton";

const MultipleFiles = () => {
  return (
    <View>
      <YubinButton
        text="This is a button from another file"
        handlePress={() => alert("Yup")}
      />
    </View>
  );
};

export default MultipleFiles;
