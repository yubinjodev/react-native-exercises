import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import HelloWorld from "./HelloWorld";
import CapturingTaps from "./CapturingTaps";
import CustomComponent from "./CustomComponent/CustomComponent";
import StateAndProps from "./StateAndProps";
import Styling from "./Styling";
import ScrollableContent from "./ScrollableContent";
import BuildForm from "./BuildForm";
import LongLists from "./LongLists";

const Stack = createStackNavigator();

export const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hello World" component={HelloWorld} />
      <Stack.Screen name="Capturing Taps" component={CapturingTaps} />
      <Stack.Screen name="Custom Component" component={CustomComponent} />
      <Stack.Screen name="State and Props" component={StateAndProps} />
      <Stack.Screen name="Styling" component={Styling} />
      <Stack.Screen name="Scrollable Content" component={ScrollableContent} />
      <Stack.Screen name="Building a Form" component={BuildForm} />
      <Stack.Screen name="Long Lists" component={LongLists} />
    </Stack.Navigator>
  );
};
