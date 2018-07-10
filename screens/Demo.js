import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HeaderLeft from '../src/components/header/HeaderLeft';
import HeaderCenter from '../src/components/header/HeaderCenter';
import HeaderRight from '../src/components/header/HeaderRight';
import BatchList from '../src/components/BatchList';

class Demo extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="home" color="grey" />,
    drawerStyle: { backgroundColor: 'blue' }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'lightgrey', flex: 1 }}>
        <Header
          leftComponent={
            <HeaderLeft
              name="menu"
              onPress={() =>
                this.props.navigation.navigate('DrawerOpen', { name: 'pankaj' })
              }
            />
          }
          centerComponent={<HeaderCenter label="Institution Name" />}
          rightComponent={<HeaderRight name="add" />}
          outerContainerStyles={{ backgroundColor: '#4867AA' }}
        />
        <BatchList />
      </View>
    );
  }
}
export default Demo;
