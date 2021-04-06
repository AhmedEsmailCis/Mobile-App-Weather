import React from 'react';
import StackNavigator from './StackNavigator';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './redux/reducers';
import ReduxThunk from 'redux-thunk';
export default function App() {
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <StackNavigator />
    </Provider>
  );
}