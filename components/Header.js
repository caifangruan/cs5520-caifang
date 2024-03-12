import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export default function Header({ name }) {
  const { height, width } = useWindowDimensions();
  const paddingVerticalDynamic = height < width ? 0 : 5;
  return (
    <View>
      <Text
        style={[styles.header, { paddingVertical: paddingVerticalDynamic }]}
      >
        Welcome to {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "darkmagenta",
    fontSize: 20,
    borderColor: "darkmagenta",
    borderWidth: 2,
    padding: windowWidth < 380 ? 5 : 10,
    borderRadius: 5,
  },
});