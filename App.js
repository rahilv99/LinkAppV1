import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapScreen from './src/screens/MapScreen/MapScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen.js';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignupScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
