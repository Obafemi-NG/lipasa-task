import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.pageWrapper}>
      <View style={styles.container}>
        <Image
          source={require("../assets/AI-illustration.png")}
          style={styles.illustration}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  illustration: {
    width: 348,
    height: 348,
    marginTop: 150,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  homeButton: {
    backgroundColor: "#C2FF1C",
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 5,
  },
  getStarted: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22,
  },
});

export default HomeScreen;
