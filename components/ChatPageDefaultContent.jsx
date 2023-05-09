import { View, Text, SectionList, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const DATA = [
  {
    imageLink: require("../assets/explain.png"),
    title: "Explain",
    data: ["Explain Quantum physics", "What are wormholes explain like i am 5"],
  },
  {
    imageLink: require("../assets/edit.png"),
    title: "Write & Edit",
    data: [
      "Write a tweet about global warming",
      "Write a poem about flower and love",
      "Write a rap song lyrics about",
    ],
  },
  {
    imageLink: require("../assets/translate.png"),
    title: "Translate",
    data: [
      "How do you say “how are you” in korean?",
      "Write a poem about flower and love",
      "Write a rap song lyrics about",
    ],
  },
];

export default function ChatPageDefaultContent() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.wordWrapper}>
            <Text style={styles.word}> {item} </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title, imageLink } }) => (
          <View style={styles.headerWrapper}>
            <Image source={imageLink} style={styles.icon} />
            <Text style={styles.title}> {title} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  wordWrapper: {
    borderRadius: 30,
    backgroundColor: "#131313",
    marginBottom: 8,
    paddingHorizontal: 16.5,
    paddingVertical: 10.5,
  },
  word: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 19,
    color: "#818181",
    textAlign: "center",
  },
  headerWrapper: {
    alignItems: "center",
    marginTop: 25,
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    color: "#979797",
    marginTop: 7,
    marginBottom: 18,
  },
});
