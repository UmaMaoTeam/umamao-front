import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {Colors} from "../../config/colors";

export default class Stepper extends Component {
  constructor() {
    super();
    steps = [true, false, false, false];
  }

  setStep(index: Number, opt: Boolean) {
    if (opt) {
      for (let i = 0; i <= index; i++) steps[i] = true;
    } else {
      for (let i = index; i < steps.length; i++) steps[i] = false;
    }
  }
  renderSteps() {
    return steps.map((step, index) => {
      return (
        <View
          style={[styles.circle, step ? styles.stepFull : styles.stepEmpty]}
          key={index}
        />
      );
    });
  }
  render() {
    return <View style={styles.container_flex}>{this.renderSteps()}</View>;
  }
}

const styles = new StyleSheet.create({
  container_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
    marginEnd: 2,
    marginHorizontal: 2
  },
  stepFull: {
    backgroundColor: Colors.primary
  },
  stepEmpty: {
    borderColor: Colors.primary,
    borderWidth: 1
  }
});
