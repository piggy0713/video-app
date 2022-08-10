import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./Button";

export default function CallingScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/img/Caller.jpg")} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          iconName="phone"
          onPress={() => {}}
          backgroundColor="green"
          style={{ marginRight: 30 }}
        />
        <Button
          iconName="phone"
          onPress={() => {}}
          backgroundColor="red"
          style={{ marginLeft: 30 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    bottom: 30,
    justifyContent: "space-between",
  },
});
