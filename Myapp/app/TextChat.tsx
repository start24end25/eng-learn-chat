import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function TextChat() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  // 메시지 보내기 함수
  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText("");

      // 상대방의 자동 응답 예시
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a reply from the other user.", isUser: false },
        ]);
      }, 1000);
    }
  };

  // 대화 종료 함수
  const endChat = () => {
    router.push("/Feedback"); // 피드백 화면으로 이동
  };

  return (
    <View style={styles.container}>
      {/* 종료 버튼 */}
      <TouchableOpacity style={styles.endChatButton} onPress={endChat}>
        <Text style={styles.endChatButtonText}>End Chat</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Text Chat</Text>

      {/* 채팅 메시지 표시 영역 */}
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.isUser ? styles.userMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.message}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 메시지 입력 영역 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // 상단 여백 추가하여 종료 버튼과 겹치지 않도록
    padding: 10,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
  },
  messageContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 5,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: '#4A90E2',
    alignSelf: 'flex-end', // 오른쪽 정렬
  },
  otherMessage: {
    backgroundColor: '#d3d3d3',
    alignSelf: 'flex-start', // 왼쪽 정렬
  },
  message: {
    fontSize: 16,
    color: '#fff', // 사용자 메시지의 텍스트 색상
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginRight: 5,
  },
  sendButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  endChatButton: {
    position: 'absolute',
    top: 10, // 화면 상단에 위치
    right: 10, // 오른쪽 정렬
    backgroundColor: '#FF5A5F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    zIndex: 1, // 다른 요소 위에 표시되도록 설정
  },
  endChatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
