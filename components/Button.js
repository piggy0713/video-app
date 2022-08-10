import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Button(props) {
  const { iconName, onPress, backgroundColor, style } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[{ backgroundColor: backgroundColor }, styles.button, style]}
      >
        <Icon name={iconName} size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    padding: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
