import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function VideoCall() {
  const router = useRouter();

  // 대화 종료 함수
  const endCall = () => {
    router.push("/Feedback"); // 피드백 화면으로 이동
  };

  return (
    <View style={styles.container}>
      {/* 종료 버튼 */}
      <TouchableOpacity style={styles.endCallButton} onPress={endCall}>
        <Text style={styles.endCallButtonText}>End Call</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Video Call</Text>
      <Text style={styles.description}>Video call in progress...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // 상단 여백 추가
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  endCallButton: {
    position: 'absolute',
    top: 10, // 화면 상단에 위치
    right: 10, // 오른쪽 정렬
    backgroundColor: '#FF5A5F',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    zIndex: 1, // 다른 요소 위에 표시되도록 설정
  },
  endCallButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
