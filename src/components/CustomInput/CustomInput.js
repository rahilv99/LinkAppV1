import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View>
            <TextInput  
            value = {value}
            onChangeText = {setValue}
            placeholder = {placeholder}
            style = {Styles.input}
            secureTextEntry = {secureTextEntry}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        borderColor: 'E8E8E8',
        borderRadius: 8,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        width: '80%',
        height: 40,
    },
});

export default CustomInput;