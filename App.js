/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import ActivityRegister from "./src/components/activityRegister/ActivityRegister";
import ActivityNavigatorContainer from "./src/ActivityNavigator";

const MainNavigator = createStackNavigator(
  {
    ActivityRegister: {
      screen: ActivityNavigatorContainer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "ActivityRegister"
  }
);

const AppNav = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNav />;
  }
}
