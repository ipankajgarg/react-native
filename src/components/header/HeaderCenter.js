import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

class HeaderCenter extends Component {
  render() {
    return (
      <View
        style={{
          maxHeight: 22,
          width: 200,
          alignItems: 'center'
        }}
      >
        <Text
          numberOfLines={1}
          style={{ fontSize: 20, color: 'white', overflow: 'hidden' }}
        >
          {this.props.label}
        </Text>
      </View>
    );
  }
}
export default HeaderCenter;
