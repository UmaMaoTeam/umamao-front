import React, {Component} from "react";
import {RNCamera} from 'react-native-camera';
import {Settings} from "../../config/settings";
import {Image, ImageBackground, Animated, Dimensions, Keyboard, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Reactotron from 'reactotron-react-native';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "",
      saveImage: props.navigation.state.params.saveImage
    };
  }

  saveImage() {
    if (this.state.saveImage)
      this.state.saveImage(this.state.imageUri);
    Reactotron.log(this.state.imageUri);
  }

  takePicture = async function() {
    try {
      if (this.camera) {
        const options = {quality: 0.5, base64: true};
        const {uri} = await this.camera.takePictureAsync();
        this.setState({imageUri: uri});
        this.saveImage();
      }
    } catch (e) {
      Reactotron.error(e);
    }
  };

  render() {
    const { imageUri } = this.state;
    if (imageUri) {
      return (
        <View style={styles.container}>
          <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: imageUri}}/>
        </View>
        );
    }
    return (
      <View style={styles.container}>
        <RNCamera
          style = {styles.preview}
          ref={camera => {this.camera = camera;}}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});