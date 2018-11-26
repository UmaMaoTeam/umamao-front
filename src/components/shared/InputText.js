import React, {Component} from "react";
import {TextInput, StyleSheet} from "react-native";
import {Colors} from "../../config/colors";
import {verticalScale} from "../../config/responsiveness";

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder || '',
      text: this.props.placeholder || ''
    };
  }

  render() {
    return (
      <TextInput
        style={[styles.input, this.props.style]}
        onChangeText={text => this.setState({text})}
        placeholder={this.state.placeholder}
        placeholderTextColor={'#fff'}
      />
    );
  }
}

const styles = new StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: Colors.white,
    width: '80%',
    borderRadius: 17,
    height: '4%',
    fontSize: verticalScale(18),
    color: Colors.white,
    paddingLeft: '3%'
  }
});