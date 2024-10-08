import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TextStyle } from 'react-native';

interface InputComponentProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle; // Estilos personalizados para o rótulo
  style?: TextInputProps['style']; // Estilo para o TextInput
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
        style={[styles.input, style]} // Aplica a propriedade de estilo diretamente ao TextInput
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
    // height: 40,
    // borderColor: '#ccc',
    borderRightColor: "red",
    borderRightWidth:  0,

    borderWidth: 1,
    // borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
