import { StyleSheet, View, Text } from "react-native";

const Styling = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text>Square 1</Text>
      </View>
      <View style={styles.square}>
        <Text>Square 2</Text>
      </View>
      <View style={styles.square}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "aquamarine",
    width: 100,
    height: 100,
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    top: "50%",
    position: "absolute",
    // transform: "translateY(-50%)",
  },
});

export default Styling;
