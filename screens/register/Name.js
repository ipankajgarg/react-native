import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HeaderLeft from '../../src/components/header/HeaderLeft';
import HeaderCenter from '../../src/components/header/HeaderCenter';
import HeaderRight from '../../src/components/header/HeaderRight';

import TextBox from '../../src/components/common/TextBox';
import CardSection from '../../src/components/common/CardSection';
import Button from '../../src/components/common/Button';

class Name extends Component {
  state = {
    username: ''
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Name',

      headerStyle: {
        height: 50,
        backgroundColor: '#4867AA'
      },
      headerTintColor: '#fff',
      drawerLockMode: 'locked-closed',
      disableGestures: true
    };
  };

  render() {
    console.log('props', this.props.navigation);
    let { username } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          leftComponent={
            <HeaderLeft
              name="arrow-back"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={<HeaderCenter label="Name" />}
          outerContainerStyles={{ backgroundColor: '#4867AA' }}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 50, fontWeight: 'bold', fontSize: 19 }}>
            Whats your name?
          </Text>

          <TextBox
            label="Full Name"
            value={username}
            baseColor="lightgrey"
            tintColor="#5690FC"
            onChangeText={username => {
              this.setState({ username });
            }}
          />

          <CardSection
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 60
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate('institutionName')}
              style={{ backgroundColor: '#5690FC', borderColor: '#5690FC' }}
            >
              Next
            </Button>
          </CardSection>
        </View>
      </View>
    );
  }
}

const styles = {
  textBox: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default Name;
