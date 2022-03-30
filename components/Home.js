import { View, Text, TouchableOpacity } from "react-native";
import HelloWorld from "./HelloWorld";

const Home = ({ navigation }) => {
  const menus = [
    "Hello World",
    "Capturing Taps",
    "Custom Component",
    "State and Props",
    "Styling",
    "Scrollable Content",
    "Building a Form",
    "Long Lists",
    "Working with an API",
  ];

  return (
    <View>
      {menus.map((menu, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(`${menu}`)}
          key={index}
        >
          <Text>
            {index + 1}
            {menu}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
