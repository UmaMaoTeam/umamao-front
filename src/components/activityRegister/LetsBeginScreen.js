import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import Stepper from "./Stepper";
import OrangeButton from "../shared/OrangeButton";
import {Colors} from "../../config/colors";

export default class LetsBeginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCheckbox: {},
      checkboxValue: [
        {
          label: "Preciso de uma mão",
          hint: "Peça uma ajudinha aos seus vizinhos.",
          value: 1
        },
        {
          label: "Quero dar uma mão",
          hint: "Pode ajudar?",
          value: 2
        }
      ]
    };
  }

  checkMe = (checked, value) => {
    this.setState({
      selectedCheckbox: value
    });
  };
  render() {
    const { checkboxValue, selectedCheckbox } = this.state;

    return (
      <View style={styles.container_flex}>
        <Stepper />
        <Text style={styles.text}>VAMOS COMEÇAR</Text>
        <View style={styles.container_flex}>
          {checkboxValue.map((option, index) => {
            return (
              <View style={styles.checkbox} key={index}>
                <CircleCheckBox
                  innerColor={Colors.primary}
                  outerColor={Colors.primary}
                  key={option.value}
                  checked={option.value === selectedCheckbox}
                  onToggle={(checked, index) =>
                    this.checkMe(checked, option.value)
                  }
                  labelPosition={LABEL_POSITION.RIGHT}
                  label={option.label}
                  styleLabel={styles.label}
                  outerSize={24}
                  filterSize={19}
                  innerSize={14}
                />
                <Text>{option.hint}</Text>
              </View>
            );
          })}
        </View>
        <OrangeButton text="Próximo"/>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container_flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container_flex_direction_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    color: Colors.black,
    fontSize: 36,
    fontWeight: "400",
    paddingTop: 60,
    paddingBottom: 60
  },
  label: {
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "400",
    color: Colors.black,
    paddingLeft: 5
  },
  checkbox: {
    marginBottom: 40
  },
  nextBtn: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  }
});
