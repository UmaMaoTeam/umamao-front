import React, { Component } from "react";
import { View } from "react-native";

import Stepper from "./Stepper";
import ActivityNavigatorContainer from "../../ActivityNavigator";
import LetsBeginScreen from "./LetsBeginScreen";

export default class ActivityRegister extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ActivityNavigatorContainer />
        <LetsBeginScreen />
      </View>
    );
  }
}
