import React, {Component} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import {Colors} from "../../config/colors";
import {scale, verticalScale} from "../../config/responsiveness";

export default class BlackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={this.props.style}
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
    width: scale(180),
    height: verticalScale(50),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: Colors.blackButton,
  },
  text: {
    fontSize: scale(24),
    color: '#fff',
    fontWeight: "400"
  }
});