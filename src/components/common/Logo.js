import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';

class Logo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 0
      }
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginLeft: 0 }}>
          <TextWithLetterSpacing
            spacing={this.props.space}
            viewStyle={styles.someViewStyle}
            textStyle={styles.someTextStyle}
            style={{ color: 'white' }}
          >
            TUTORIAL
          </TextWithLetterSpacing>

          <Text style={[styles.text2, this.props.style]}>MANAGEMENT</Text>
        </View>
        <View style={styles.text3View}>
          <Text style={[styles.text3, this.props.style]}>APP</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flexDirection: 'row'
  },
  text1: {
    fontWeight: '300',
    color: 'white'
  },
  text2: {
    fontWeight: 'bold',
    color: 'white'
  },
  text3: {
    fontWeight: '400',
    transform: [{ rotate: '90deg' }],
    color: 'white'
  },
  text3View: {
    marginTop: 13,
    backgroundColor: '#F05A22',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginLeft: 5,
    justifyContent: 'center'
  },

  someViewStyle: {
    paddingTop: 10
  },
  someTextStyle: {
    color: 'white',
    fontSize: 30
  }
};
export default Logo;
