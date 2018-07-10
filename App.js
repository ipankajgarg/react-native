import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Welcome from './screens/Welcome';
import Wall from './screens/Wall';
import Router from './src/Router';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider
          store={createStore(
            reducers,
            {},
            compose(applyMiddleware(ReduxThunk))
          )}
        >
          <Router />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center'
  }
});
//never use alignItems center in styles for App.js
