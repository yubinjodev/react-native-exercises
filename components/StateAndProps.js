import { useState } from "react";
import { View, Text } from "react-native";
import YubinButton from "./CustomComponent/YubinButton";

const StateAndProps = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>You've pressed me {count} times</Text>
      <YubinButton text="Press me" handlePress={() => setCount(count + 1)} />
    </View>
  );
};

export default StateAndProps;
