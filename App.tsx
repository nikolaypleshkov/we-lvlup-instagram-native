/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import type { PropsWithChildren } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Router from "./src/routes";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Toast from "./src/components/Toast";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
