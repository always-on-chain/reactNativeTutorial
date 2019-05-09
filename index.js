/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import configureStores from "./src/store/configureStore";
import { name as appName } from "./app.json";
import configureStore from "./src/store/configureStore";

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
