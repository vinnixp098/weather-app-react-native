import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TextStyle } from 'react-native';

interface InputComponentProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  style?: TextInputProps['style'];
}

export const InputComponent: React.FC<InputComponentProps> = ({
  label,
  labelStyle,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderRightColor: "red",
    borderRightWidth:  0,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
