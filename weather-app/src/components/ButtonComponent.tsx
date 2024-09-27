import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    children?: React.ReactNode; // Permitir passar filhos
}

export const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, children }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]} 
            onPress={onPress}
        >
            {children ? children : <Text style={[styles.text, textStyle]}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

