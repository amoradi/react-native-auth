import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginError: '',
    };

    this.onButtonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    const { email, password } = this.state;

    this.setState({loginError: ''});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ loginError: "Authenticated Failed." });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com" 
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password" 
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorStyles}>
          {this.state.loginError}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ff0000'
  }
};

export default LoginForm;
