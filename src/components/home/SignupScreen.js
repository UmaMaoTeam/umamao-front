import React, {Component} from "react";
import {Image, ImageBackground, Animated, Dimensions, Keyboard, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {Settings} from "../../config/settings";
import {verticalScale} from "../../config/responsiveness";
import {Colors} from "../../config/colors";
import InputText from "../shared/InputText";
import TextLinked from "../shared/TextLinked";
import Transition from "react-navigation-fluid-transitions/TransitionView";
import Reactotron from 'reactotron-react-native';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(verticalScale(Settings.NORMAL_CAMERA_HEIGHT));
    this.cameraDisplay = new Animated.Value(1);
    this.textOpacity = new Animated.Value(1);
    this.textMarginTop = new Animated.Value(verticalScale(20));
    this.textHeight = new Animated.Value(verticalScale(20));
    this.state = {
      imageUri: ""
    };
  }

  keyboardWillShow = (event) => {
    Reactotron.display({
      name: 'ORANGE',
      preview: 'Keyboard Height',
      value: event.endCoordinates.height,
      important: true
    });
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 200,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.cameraDisplay, {
        duration: 200,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: 200,
        toValue: 0
      }),
      Animated.timing(this.textOpacity, {
        duration: 200,
        toValue: 0
      }),
      Animated.timing(this.textMarginTop, {
        duration: 200,
        toValue: 0
      }),
      Animated.timing(this.textHeight, {
        duration: 200,
        toValue: 0
      })

    ]).start();
  };

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 200,
        toValue: 0
      }),
      Animated.timing(this.cameraDisplay, {
        duration: 200,
        toValue: 1,
      }),
      Animated.timing(this.imageHeight, {
        duration: 200,
        toValue: verticalScale(Settings.NORMAL_CAMERA_HEIGHT)
      }),
      Animated.timing(this.textOpacity, {
        duration: 200,
        toValue: 1
      }),
      Animated.timing(this.textMarginTop, {
        duration: 200,
        toValue: verticalScale(20)
      }),
      Animated.timing(this.textHeight, {
        duration: 200,
        toValue: verticalScale(20)
      })
    ]).start();
  };

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  saveImage = (imageUri) => {
    this.setState({imageUri});
    Reactotron.log(imageUri);
  }

  renderImage() {
    const { imageUri } = this.state;
    console.log(imageUri);
    return(<Image style={{minWidth: '50%', height: Settings.NORMAL_CAMERA_HEIGHT, resizeMode: 'contain', maxWidth: '100%'}} source={{uri: imageUri}}/>);
  }

  renderCamera() {
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate("Camera", {saveImage: this.saveImage})}
        style = {styles.capture}>
        <Animated.Image
          fadeDuration={0}
          style={[styles.camera, {maxHeight: this.imageHeight, opacity: this.cameraDisplay}]}
          defaultSource={Settings.SIGNUP_CAMERA}
          source={Settings.SIGNUP_CAMERA}/>
      </TouchableOpacity>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Transition appear="horizontal">
        <Animated.View style={{paddingBottom: this.keyboardHeight}}>
          <View style={styles.homeContainer}>
            <Animated.Text style={[styles.signupText, {
              opacity: this.textOpacity,
              marginTop: this.textMarginTop,
              height: this.textHeight
            }]}>Quase lá! Agora vamos criar o seu perfil.</Animated.Text>
            {this.state.imageUri ? this.renderImage() : this.renderCamera()}
            
            <Animated.Text style={[styles.loginText, {opacity: this.textOpacity, height: this.textHeight}]}>ADICIONAR FOTO</Animated.Text>
            <InputText style={styles.input} placeholder={"NOME COMPLETO*"}/>
            <InputText style={styles.input} placeholder={"DATA DE NASCIMENTO*"}/>
            <InputText style={styles.input} placeholder={"CPF"}/>
            <InputText style={styles.input} placeholder={"E-MAIL*"}/>
            <InputText style={styles.input} placeholder={"DDD + TELEFONE*"}/>
            <InputText style={styles.input} placeholder={"LOCALIZAÇÃO*"}/>
            <TextLinked iconSize={33} textStyle={styles.continueBtn} containerStyle={styles.continueBtnCont}
                        onPress={() => navigate("Login")} text={"CONTINUAR"} icon={"arrow-forward"}/>
          </View>
        </Animated.View>
      </Transition>
    );
  }
}

const styles = new StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  homeContainer: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center'
  },
  signupText: {
    color: Colors.white,
  },
  camera: {
    resizeMode: 'contain',
    maxWidth: '100%'
  },
  loginText: {
    color: Colors.white,
  },
  input: {
    marginTop: '3%',
    height: verticalScale(40)
  },
  textLinked: {
    textDecorationLine: 'underline',
    fontSize: verticalScale(20)
  },
  continueBtn: {
    fontSize: verticalScale(22),
  },
  continueBtnCont: {
    marginTop: verticalScale(12)
  },
  capture: {
    backgroundColor: 'transparent'
  }
});
