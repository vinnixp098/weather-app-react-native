import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

interface IconComponentProps {
    icon: any; // Pode ser um require de imagem local
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
}

export const IconComponent: React.FC<IconComponentProps> = (props) => {
    return (
        <View>
            <Image
                source={props.icon}
                style={[{ width: props.width, height: props.height }, props.style]}
                resizeMode="cover" // ou "contain", conforme necessário
            />
        </View>
    );
};
