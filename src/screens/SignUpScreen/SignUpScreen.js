import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useState } from 'react';

const onRegisterPressed = () => {
    console.warn('Register Pressed');
};
const onSignUpPress = () => {
    console.warn('Sign Up Pressed');
};
const onTermsofUsePressed = () => {
    console.warn('Terms of Use Pressed');
};
const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy Pressed');
};
const onSignInGoogle = () => {
    console.warn('Sign In with Google Pressed');
};
const onSignInApple = () => {
    console.warn('Sign In with Apple Pressed');
};
const onSignInSchool = () => {
    console.warn('Sign In with School Pressed');
};


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    return (
        <ScrollView contentContainerStyle = {{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style = {styles.title}>Create Account</Text>

            <CustomInput 
            placeholder = "Username"
            value = {username}
            setValue = {setUsername}
            />
            <CustomInput 
            placeholder = "Email"
            value = {email}
            setValue = {setEmail}
            />
            <CustomInput 
            placeholder = "Password"
            value = {password}
            setValue = {setPassword}
            secureTextEntry
            />
            <CustomInput 
            placeholder = "Verify Password"
            value = {passwordRepeat}
            setValue = {setPasswordRepeat}
            secureTextEntry
            />
            <CustomButton text = "Register" onPress = {onRegisterPressed}/>

            <Text style = {styles.text}>By registering, you confirm that you accept our{' '}
            <Text style = {styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and{' '}
            <Text style = {styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.
            </Text>

            <CustomButton 
            text = "Sign In with Google" 
            onPress = {onSignInGoogle}
            bgColor = "#E7EAF4"
            fgColor = "#4765A9"
            />
            <CustomButton 
            text = "Sign In with Apple" 
            onPress = {onSignInApple}
            bgColor = "#FAE9EA"
            fgColor = "#DD4D44"
            />
            <CustomButton 
            text = "Sign In with School" 
            onPress = {onSignInSchool}
            bgColor = "#e3e3e3"
            fgColor = "#363636"
            />

            <CustomButton text = "Dont have an account? Create One" onPress = {onSignUpPress} type = "TERTIARY"/>
            <StatusBar style="auto" />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    root : {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 12,
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        fontSize: 12,
        color: '#FDB075',
    },

});

export default SignUpScreen;