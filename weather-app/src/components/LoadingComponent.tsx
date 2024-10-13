import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      {/* <Icon name="spinner" size={40} color="#0000ff" style={styles.icon} /> */}
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
    transform: [{ rotate: '1rad' }], // Adiciona rotação ao ícone
  },
});

