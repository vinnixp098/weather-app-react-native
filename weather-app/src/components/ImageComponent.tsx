import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

interface ImageComponentProps {
    img: string | any;
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ img, width, height, style }) => {
    return (
        <View>
            <Image
                source={img}
                style={[{ width, height }, style]}
                resizeMode="cover"
            />
        </View>
    );
};
