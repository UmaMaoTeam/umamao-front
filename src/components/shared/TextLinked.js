import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Icon } from 'react-native-elements';
import { Colors } from "../../config/colors";
import {verticalScale} from "../../config/responsiveness";

export default class TextLinked extends Component {
  constructor(props) {
    super(props);
  }
  renderIcon() {
    if (this.props.icon) {
      return (<Icon name={this.props.icon} size={verticalScale(this.props.iconSize || 40)} color={Colors.blackButton}/>);
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
      >
        <View style={[styles.textContainer, this.props.containerStyle]}>
          <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
          {this.renderIcon()}
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
    fontSize: verticalScale(26),
    color: Colors.blackButton,
    fontWeight: "500"
  }
});
