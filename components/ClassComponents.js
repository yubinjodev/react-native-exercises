import React from "react";
import { View, Text } from "react-native";
import YubinButton from "./CustomComponent/YubinButton";

export default class ClassComponents extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <View>
        <Text>This is a class component.</Text>
        <Text>You've pressed me {this.state.count} times</Text>
        <YubinButton text="Press me" handlePress={this.add} />
      </View>
    );
  }
}
