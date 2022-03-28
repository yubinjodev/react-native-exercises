import { View, Text, TouchableOpacity } from "react-native";

const CapturingTaps = () => {
  const handleButton = () => {
    alert("Hello :)");
  };

  return (
    <View>
      <TouchableOpacity onPress={handleButton}>
        <Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CapturingTaps;
