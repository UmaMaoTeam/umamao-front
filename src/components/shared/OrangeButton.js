import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from "../../config/colors";

export default class OrangeButton extends Component {
  constructor(props) {super(props);}

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <LinearGradient
          start={{x:0, y:0}}
          end={{x:1, y:0}}
          style={styles.button}
          colors={[Colors.primary, Colors.secondary]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Icon name={"arrow-forward"} size={40} color={"#ffffff"}/>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = new StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 26,
    color: '#fff',
    fontWeight: "500"
  }
});