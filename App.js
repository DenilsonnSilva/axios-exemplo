import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/51"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatData = (data) => {
    if (data) {
      const jsonStr = JSON.stringify(data, null, 2);
      return jsonStr
        .split("\n")
        .map((item, key) => <Text key={key}>{item}</Text>);
    } else {
      return <Text>Carregando...</Text>;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#f2f2f2",
      }}
    >
      {formatData(data)}
    </View>
  );
};
