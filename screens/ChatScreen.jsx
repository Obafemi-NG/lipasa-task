import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ChatPageDefaultContent from "../components/ChatPageDefaultContent";
import ChatHeader from "../components/ChatHeader";
import ChatPreview from "../components/ChatPreview";

export default function ChatScreen() {
  const [startChat, setStartChat] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <SafeAreaView style={styles.pageWrapper}>
        <ChatHeader />
        <View style={styles.content}>
          {startChat ? <ChatPreview /> : <ChatPageDefaultContent />}
          {!startChat && (
            <TouchableOpacity
              style={styles.chatBtn}
              onPress={() => setStartChat(true)}
            >
              <Text style={styles.start}> Start Chat. </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput style={styles.input} placeholder="Ask something..." />
        <TouchableOpacity style={styles.sendBtnWrapper}>
          <Image source={require("../assets/send.png")} style={styles.send} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  chatBtn: {
    borderRadius: 10,
    backgroundColor: "#C2FF1C0D",
    marginHorizontal: 130,
  },
  start: {
    color: "white",
    textAlign: "center",
    fontWeight: 700,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inputWrapper: {
    backgroundColor: "#131313",
    borderColor: "#242B14",
    borderTopWidth: 1,
    paddingHorizontal: 42,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 30,
    fontSize: 16,
    color: "#818181",
  },
  sendBtnWrapper: {
    padding: 15,
    backgroundColor: "#C2FF1C0D",
    borderRadius: "50%",
  },
  send: {
    width: 15,
    height: 15,
  },
});
