import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const WorkingWithAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://randomuser.me/api/?results=100";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.results);
    };

    fetchData().catch(console.error);
  }, []);

  const Item = ({ picture, name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name.first} />;

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
      />
      {users.map((user, index) => (
        <Text key={user.login.uuid}>{user.name.first}</Text>
      ))}
    </View>
  );
};

export default WorkingWithAPI;
