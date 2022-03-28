import { StyleSheet, View, Text } from "react-native";
import YubinButton from "./YubinButton";

const CustomComponent = () => {
  return (
    <View>
      <YubinButton text="Say hello" handlePress={() => alert("Hello")} />

      <YubinButton text="Say goodbye" handlePress={() => alert("Goodbye")} />
    </View>
  );
};

export default CustomComponent;
