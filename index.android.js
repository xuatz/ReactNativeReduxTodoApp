/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import App from './app/containers/App';
import todoApp from './app/reducers';

const {
  AppRegistry,
  View
} = React;

const store = createStore(todoApp)
const ReactNativeReduxTodoApp = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
       {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('ReactNativeReduxTodoApp', () => ReactNativeReduxTodoApp);

