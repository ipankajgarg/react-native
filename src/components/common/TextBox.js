import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { TextField } from 'react-native-material-textfield';
var { height, width } = Dimensions.get('window');

class TextBox extends Component {
  render() {
    return (
      <View style={{ width: width, paddingLeft: 30, paddingRight: 30 }}>
        <TextField
          label={this.props.label}
          tintColor={this.props.tintColor}
          baseColor={this.props.baseColor}
          onChangeText={this.props.onChangeText}
          labelFontSize={15}
        />
      </View>
    );
  }
}
export default TextBox;
