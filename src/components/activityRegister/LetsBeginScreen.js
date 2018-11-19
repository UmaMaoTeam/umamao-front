import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import Stepper from "./Stepper";

// import t from "tcomb-form-native";

// const Form = t.form.Form;

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
              <View key={index}>
                <CircleCheckBox
                  key={option.value}
                  checked={option.value === selectedCheckbox}
                  onToggle={(checked, index) =>
                    this.checkMe(checked, option.value)
                  }
                  labelPosition={LABEL_POSITION.RIGHT}
                  label={option.label}
                  styleLabel={{ fontSize: 17 }}
                  innerSize={15}
                />
                <Text>{option.hint}</Text>
              </View>
            );
          })}
        </View>
        <Button title="Próximo ->" />
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
    color: "#000000",
    fontSize: 36,
    fontWeight: "600",
    paddingTop: 60,
    paddingBottom: 60
  }
});
