import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Colors } from "../../config/colors";

export default class BlackButton extends Component {
  constructor(props) {super(props);}

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.props.onPress}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = new StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: Colors.blackButton,
  },
  text: {
    fontSize: 26,
    color: '#fff',
    fontWeight: "400"
  }
});