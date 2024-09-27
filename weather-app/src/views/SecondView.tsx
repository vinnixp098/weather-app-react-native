import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function SecondView() {
    const navigate = useNavigate();

    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Second View</Text>
            <TouchableOpacity onPress={() => navigate('/')}>
                <Text>Go to First View</Text>
            </TouchableOpacity>
        </View>

    );
}
