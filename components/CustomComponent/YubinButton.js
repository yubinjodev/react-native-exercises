import { StyleSheet, Text, TouchableOpacity } from "react-native";

const YubinButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#ff476c",
    margin: 50,
    padding: 20,
    width: 150,
    borderRadius: 12,
  },
  text: {
    color: "#fff",
  },
});

export default YubinButton;
