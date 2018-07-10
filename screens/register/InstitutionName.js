import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import TextBox from '../../src/components/common/TextBox';
import CardSection from '../../src/components/common/CardSection';
import Button from '../../src/components/common/Button';

class InstitutionName extends Component {
  state = {
    username: ''
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Institution Name',

      headerStyle: {
        height: 50,
        backgroundColor: '#4867AA'
      },
      headerTintColor: '#fff'
    };
  };

  render() {
    let { username } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontWeight: 'bold', fontSize: 19 }}>
          Whats your institution name?
        </Text>

        <TextBox
          label="Institution Name"
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
            onPress={() => conosle.log('hello')}
            style={{ backgroundColor: '#5690FC', borderColor: '#5690FC' }}
          >
            Next
          </Button>
        </CardSection>
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

export default InstitutionName;
