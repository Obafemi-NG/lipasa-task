import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ChatContainer({ sent, message }) {
  return (
    <View
      style={[
        styles.container,
        sent ? styles.sentContainer : styles.receivedContainer,
      ]}
    >
      <Text
        style={[
          styles.message,
          sent ? styles.sentMessage : styles.receivedMessage,
        ]}
      >
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    maxWidth: 290,
    paddingHorizontal: 26,
    paddingVertical: 18,
  },
  sentContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#B0F100",
    marginLeft: 100,
  },
  receivedContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#131313",
  },
  message: {
    fontSize: 14,
    fontWeight: 500,
  },
  sentMessage: {
    color: "#0D0D0D",
  },
  receivedMessage: {
    color: "#818181",
  },
});
