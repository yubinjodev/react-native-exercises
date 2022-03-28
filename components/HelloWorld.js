import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    display: "flex",
    height: 100,
    width: 100,
    backgroundColor: "aquamarine",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default HelloWorld;
