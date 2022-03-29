import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const ScrollableContent = () => {
  const squares = [
    "Square 1",
    "Square 2",
    "Square 3",
    "Square 4",
    "Square 5",
    "Square 6",
    "Square 7",
    "Square 8",
    "Square 9",
    "Square 10",
    "Square 11",
    "Square 12",
    "Square 13",
    "Square 14",
    "Square 15",
  ];

  return (
    <View>
      <ScrollView>
        {squares.map((square, index) => (
          <View key={index} style={styles.square}>
            <Text>{square}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  square: {
    height: 100,
    width: 100,
    justifyContent: "center",
    textAlign: "center",
    margin: 25,
    backgroundColor: "aquamarine",
  },
});

export default ScrollableContent;
