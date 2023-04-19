import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CustomButton = ({text, onPress, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable 
        onPress={onPress}
        style={[
        styles.container, 
        styles['container${type}'], 
        bgColor ? {backgroundColor: bgColor} : {},
        ]}>
            <Text 
            style={[
            styles.text, 
            styles['text_${type}'],
            fgColor ? {color: fgColor} : {},
            ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '100%',
        padding : 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY : {
        backgroundColor: '3B71F3',
    },
    container_TERITIARY : {
    },
    text: {
        fontWeight: 'bold',
        color: white,
    },
    text_TERTIARY : {
        color: 'gray',
    },
});

export default CustomButton;