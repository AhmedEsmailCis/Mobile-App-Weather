import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./redux/reducers";
import StackNavigator from "./navigation";

export default function App() {
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <StackNavigator />
    </Provider>
  );
}
