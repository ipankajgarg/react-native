import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Logo from '../src/components/common/Logo';

class Wall extends Component {
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
        <Logo space={10} style={styles.logoSize} />
      </View>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#4867AA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontWeight: '300'
  },
  text2: {
    fontWeight: 'bold'
  },
  text3: {
    fontWeight: '400',
    transform: [{ rotate: '90deg' }]
  },
  text3View: {
    marginTop: 13,
    backgroundColor: '#F05A22',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginLeft: 5
  },
  commonStyle: {
    color: 'white',
    fontSize: 30
  },
  someViewStyle: {
    paddingTop: 10
  },
  someTextStyle: {
    color: 'white',
    fontSize: 30
  },
  logoSize: {
    fontSize: 30
  }
};
export default Wall;
