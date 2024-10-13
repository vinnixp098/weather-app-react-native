import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  icon: {
    marginBottom: 10,
    transform: [{ rotate: '1rad' }]
  },
});

