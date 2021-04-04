import React from 'react';
import StackNavigator from './StackNavigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './redux/reducers';
export default function App() {
  return (
    <Provider store={createStore(Reducers)}>
      <StackNavigator />
    </Provider>
  );
}
