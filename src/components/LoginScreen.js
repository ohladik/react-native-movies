import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
 } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

const { width, height } = Dimensions.get('window');


class LoginScreen extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonLabel}>
            LOG IN
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
    <View style={styles.viewStyle}>
      <StatusBar
        backgroundColor="#A798D4"
        barStyle="light-content"
      />
        <View style={styles.formContainerStyle}>
          <View style={styles.cardStyle}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={this.onEmailChange.bind(this)}
                label="Email:"
                placeholder="EMAIL"
                placeholderTextColor="#fff"
                value={this.props.email}
                style={styles.loginTextInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                secureTextEntry
                label="Password:"
                placeholder="PASSWORD"
                placeholderTextColor="#fff"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                style={styles.loginTextInput}
              />
            </View>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
              {this.renderButton()}
          </View>
        </View>
    </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  backgroundStyle: {
    flex: 1,
    width: null,
    height: null
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  cardStyle: {
    borderWidth: 0,
    elevation: 0
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    width: width * 0.8,
    marginBottom: height * 0.02,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  loginTextInput: {
    width: width * 0.6,
    color: '#fff',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    width: width * 0.8,
    backgroundColor: '#fff',
  },
  loginButtonLabel: {
    color: '#000',
    fontSize: 20,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginScreen);
