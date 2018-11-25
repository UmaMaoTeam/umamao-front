import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Icon } from 'react-native-elements';
import { Colors } from "../../config/colors";

export default class TextLinked extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.text}</Text>
          <Icon name={"arrow-forward"} size={40} color={Colors.blackButton}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = new StyleSheet.create({
  textContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 26,
    color: Colors.blackButton,
    fontWeight: "500"
  }
});
