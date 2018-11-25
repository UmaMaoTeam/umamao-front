import React, {Component} from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";

import ActivityNavigatorContainer from "./src/navigators/ActivityNavigator";
import HomeNavigatorContainer from "./src/navigators/HomeNavigator";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeNavigatorContainer,
      navigationOptions: {header: null}
    },
    ActivityRegister: {
      screen: ActivityNavigatorContainer,
      navigationOptions: {header: null}
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppNav = createAppContainer(MainNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNav/>;
  }
}
