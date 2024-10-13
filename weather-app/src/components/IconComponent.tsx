import React from 'react';
import { View, Image, StyleProp, ImageStyle } from 'react-native';

interface IconComponentProps {
    icon: any;
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
                resizeMode="cover"
            />
        </View>
    );
};
