import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';
import Wall from '../screens/Wall';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Name from '../screens/register/Name';
import InstitutionName from '../screens/register/InstitutionName';
import Demo from '../screens/Demo';
import DrawerContent from './components/DrawerContent';
import AccountSetting from './components/AccountSetting';

const RouterComponent = StackNavigator(
  {
    welcome: { screen: Welcome },
    name: { screen: Name },
    institutionName: { screen: InstitutionName },
    wall: { screen: Wall },
    home: DrawerNavigator(
      {
        home: {
          screen: Home
        },
        accountSetting: { screen: AccountSetting }
      },
      {
        contentComponent: DrawerContent
      }
    )
  },
  { initialRouteName: 'home', headerMode: 'none' }
);

//
// const RouterComponent = DrawerNavigator(
//   {
//     home: { screen: Demo },
//     change: StackNavigator(
//       {
//         name: { screen: Name }
//       },
//       { drawerLockMode: 'locked-closed' }
//     )
//   },
//   {
//     contentComponent: DrawerContent,
//
//   }
// );

export default RouterComponent;
