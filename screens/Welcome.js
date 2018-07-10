import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextBox from '../src/components/common/TextBox';
// import Button from '../src/components/common/Button';
// import CardSection from '../src/components/common/CardSection';
var { height, width } = Dimensions.get('window');
width = width - 60;
import Logo from '../src/components/common/Logo';
class Welcome extends Component {
  state = { email: '' };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 0
      }
    };
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{ alignItems: 'center' }}>
          <Logo space={5} style={styles.logoSize} />
        </View>

        <View style={styles.loginForm}>
          <TextBox
            label="Email Address"
            value={this.state.email}
            titleFontSize={50}
            baseColor="white"
            tintColor="white"
            onChangeText={email => {
              this.setState({ email });
            }}
          />

          <TextBox
            color="white"
            label="password"
            baseColor="white"
            tintColor="white"
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email });
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Button
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
            title="Login"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginLeft: -15
          }}
        >
          <Text>
            <Text style={{ color: 'black' }}>Create an account?</Text>
            <Text
              style={{ color: 'white', fontSize: 18 }}
              onPress={() => this.props.navigation.navigate('name')}
            >
              Signup here
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#4867AA',

    flex: 1,
    justifyContent: 'center'
  },
  logoSize: {
    fontSize: 25
  },
  buttonStyle: {
    width: width,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  textStyle: {
    color: '#3D5B99',
    fontWeight: 'bold',
    fontSize: 20
  },
  loginForm: { marginTop: 40 }
};

export default Welcome;
