import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

interface ImageComponentProps {
    img: string | any; // Pode ser uma URL ou um require de imagem local
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ img, width, height, style }) => {
    return (
        <View>
            <Image
                source={img} // Aceita tanto URLs quanto imagens locais
                style={[{ width, height }, style]} // Aplica estilos
                resizeMode="cover" // ou "contain", conforme necessário
            />
        </View>
    );
};
