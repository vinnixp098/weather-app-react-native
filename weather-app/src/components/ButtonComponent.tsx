import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  title?: string; // Agora, title é opcional
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode; // Permitir passar um ícone
  children?: React.ReactNode; // Permitir passar filhos
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  icon,
  children,
  title, // Adiciona title ao destructuring
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        {children ? (
          children
        ) : (
          title && <Text style={[styles.text, textStyle]}>{title}</Text> // Exibe o título se fornecido
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    display: "flex",
    alignItems:  "center",
    justifyContent: "center",
    backgroundColor:  "#007BFF",


  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
