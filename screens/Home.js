import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

export default function Home({navigation}) {
  return (
    <View>
        <Text>Home</Text>
        <Button title="About" onPress={() => navigation.navigate("About")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
