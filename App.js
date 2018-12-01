import React, {Component} from "react";
import {createAppContainer} from "react-navigation";
import {FluidNavigator} from "react-navigation-fluid-transitions";
import LinearGradient from "react-native-linear-gradient";
import {Dimensions, StyleSheet, Header, StatusBar, View} from "react-native";
import './src/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import ActivityNavigatorContainer from "./src/navigators/ActivityNavigator";
import HomeNavigatorContainer from "./src/navigators/HomeNavigator";
import {Colors} from "./src/config/colors";

const MainNavigator = FluidNavigator(
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
    return (
      <View>
        <StatusBar backgroundColor={Colors.mix} animated={true}></StatusBar>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.homeContainer}
          colors={[Colors.home1, Colors.home2]}>
          <AppNav/>
        </LinearGradient>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  homeContainer: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    display: 'flex',
  }
});
