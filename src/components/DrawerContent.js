import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerContent = props => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#4867AA',
          height: 170,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          style={{ width: 50, height: 50, tintColor: 'white', marginTop: 20 }}
          source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_210318.png' }}
        />
        <Text style={{ color: 'white', fontSize: 25 }}>pankaj garg</Text>
      </View>
      <DrawerItems {...props} />
    </View>
  );
};
export default DrawerContent;
