import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA6pnaUtwtxbIKk3hRVNmbIBJO_mWdtbMM',
      authDomain: 'react-native-auth-f5515.firebaseapp.com',
      databaseURL: 'https://react-native-auth-f5515.firebaseio.com',
      projectId: 'react-native-auth-f5515',
      storageBucket: 'react-native-auth-f5515.appspot.com',
      messagingSenderId: '759125600410'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
