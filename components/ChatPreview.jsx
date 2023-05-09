import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ChatContainer from "./ChatContainer";

export default function ChatPreview() {
  return (
    <View style={styles.previewContainer}>
      <ChatContainer message="Hello chatAi ,how are you today?" sent={true} />
      <ChatContainer
        message="Hello,i’m fine,how can i help you?"
        sent={false}
      />
      <ChatContainer
        message="Lorem ipsum dolor sit amet consectetur."
        sent={true}
      />
      <ChatContainer
        message="Lorem ipsum dolor sit amet consectetur. Blandit purus sed a velit vel facilisi. Mauris fusce enim id risus mauris quam dolor lectus. Nunc bibendum sed commodo augue a eu. Ac lobortis justo imperdiet posuere lacus tristique at justo. Enim massa nisl condimentum a id. Pharetra a."
        sent={false}
      />
      <ChatContainer message="So explain to me more" sent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  previewContainer: {
    paddingRight: 17,
    paddingLeft: 30,
    paddingVertical: 40,
    gap: 27,
  },
});
