import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import CallingScreen from "./components/CallingScreen";
import Video from "./components/Video";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Video /> */}
      <CallingScreen />
      {/* <Button iconName="video" onPress={() => {}} backgroundColor="grey" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
