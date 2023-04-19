import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, useWindowDimensions, ScrollView} from 'react-native';
//import Logo from '../../assets/images/favicon.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const onSignInPressed = () => {
    console.warn('Sign In Pressed');
};
const onForgotPasswordPressed = () => {
    console.warn('Forgot Password Pressed');
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

const onSignUpPress = () => {
    console.warn('Sign Up Pressed');
};

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { width, height } = useWindowDimensions();
    return (
        <ScrollView contentContainerStyle = {{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <CustomInput 
            placeholder = "Username"
            value = {Username}
            setValue = {setUsername}
            />
            <CustomInput 
            placeholder = "Password"
            value = {password}
            setValue = {setPassword}
            secureTextEntry
            />
            <CustomButton text = "Sign In" onPress = {onSignInPressed}/>

            <CustomButton text = "Forgot Password?" onPress = {onForgotPasswordPressed} type = "TERTIARY"/>

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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
    root : {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default SignInScreen;