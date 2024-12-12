// app/ChooseConversationType.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChooseConversationType() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Conversation Type</Text>

      {/* Text Chat Button */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => router.push("/TextChat")}
      >
        <Text style={styles.buttonText}>Text Chat</Text>
      </TouchableOpacity>

      {/* Voice Chat Button */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => router.push("/VoiceCall")}
      >
        <Text style={styles.buttonText}>Voice Chat</Text>
      </TouchableOpacity>

      {/* Video Call Button */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => router.push("/VideoCall")}
      >
        <Text style={styles.buttonText}>Video Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
