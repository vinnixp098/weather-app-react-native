import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

interface ImageComponentProps {
    img: any; // Pode ser um require de imagem local
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
}

export const ImageComponent: React.FC<ImageComponentProps> = (props) => {
    return (
        <View>
            <Image
                source={props.img}
                style={[{ width: props.width, height: props.height }, props.style]}
                resizeMode="cover" // ou "contain", conforme necessário
            />
        </View>
    );
};
