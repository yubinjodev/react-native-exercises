import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";

import { Nav } from "./components/Nav";

const App = () => {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
};

export default App;
