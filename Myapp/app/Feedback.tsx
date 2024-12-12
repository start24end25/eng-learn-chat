import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Feedback() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.subtitle}>Thank you for using the app!</Text>
      <Text style={styles.feedbackText}>
        We value your feedback. Please let us know how we can improve!
      </Text>
      
      {/* 홈 화면으로 돌아가는 버튼 */}
      <Button title="Back to Home" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A90E2',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
});
