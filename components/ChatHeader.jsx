import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChatHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.topRight}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.arrowLeft}
          />
        </TouchableOpacity>
        <Image source={require("../assets/robot.png")} style={styles.robot} />
        <Text style={styles.recepient}> Chat Ai </Text>
      </View>
      <View style={styles.topLeft}>
        <Entypo name="dots-three-vertical" size={24} color="#C2FF1C" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "#81818133",
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowLeft: {
    height: 26,
    width: 26,
  },
  robot: {
    width: 37,
    height: 37,
    marginLeft: 20,
    marginRight: 18,
  },
  recepient: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  menu: {
    height: 70,
    width: 21,
  },
});
