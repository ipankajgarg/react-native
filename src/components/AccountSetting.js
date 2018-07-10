import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class AccountSetting extends Component {
  static navigationOptions = {
    drawerLabel: 'Account setting',
    drawerIcon: ({ tintColor }) => <Icon name="account-box" color="grey" />,
    drawerStyle: { backgroundColor: 'blue' }
  };

  render() {
    return (
      <View>
        <Text>Account Setting</Text>
        <Text>Account Setting</Text>
        <Text>Account Setting</Text>

        <Text>Account Setting</Text>
        <Text>Account Setting</Text>
        <Text>Account Setting</Text>
      </View>
    );
  }
}
export default AccountSetting;
