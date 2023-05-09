import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { useCardAnimation } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
// import Bot from "../assets/bot.svg";
export default function ExploreScreen() {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();

  return (
    <View style={[styles.wrapper]}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={StyleSheet.absoluteFill}
      />
      <Animated.View
        style={[
          {
            height: height,
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [height, height * 0.6],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
          styles.viewAnimated,
        ]}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.title}>Welcome to </Text>
          <View style={styles.botWrapper}>
            <Text style={styles.uswati}> Uswati ChatAi </Text>
            {/* <Bot /> */}
            <Image source={require("../assets/bot.png")} style={styles.bot} />
          </View>
          <Text style={styles.description}>
            {" "}
            Using this feature, you can ask questions Receive articles using
            artificial Intelligence{" "}
          </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate("Explore")}
            >
              <Text
                style={styles.explore}
                onPress={() => navigation.navigate("Chat")}
              >
                Explore
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  viewAnimated: {
    width: "100%",
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    backgroundColor: "#131313",
  },
  title: {
    color: "white",
    fontSize: 22,
  },
  description: {
    color: "white",
    paddingTop: 15,
    color: "#818181",
    fontSize: 14,
    lineHeight: 16,
    width: "80%",
  },
  uswati: {
    color: "white",
    fontSize: 22,
    fontWeight: 700,
  },
  botWrapper: {
    flexDirection: "row",
  },
  bot: {
    width: 30,
    height: 30,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 90,
  },
  exploreButton: {
    backgroundColor: "#C2FF1C",
    width: "100%",
    borderRadius: 5,
  },
  explore: {
    fontSize: 16,
    paddingHorizontal: 60,
    paddingVertical: 20,
    fontWeight: 500,
    lineHeight: 22,
    textAlign: "center",
  },
});
