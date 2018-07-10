import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Header, Icon } from 'react-native-elements';

class HeaderCenter extends Component {
  render() {
    return (
      <View style={{ marginTop: Platform.OS === 'ios' ? 15 : 30 }}>
        <Icon
          color="white"
          size={30}
          name={this.props.name}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}
export default HeaderCenter;
