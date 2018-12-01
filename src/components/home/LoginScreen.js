import React, {Component} from "react";
import {Text, StyleSheet, Dimensions, Animated, Keyboard, View} from "react-native";
import {Colors} from "../../config/colors";
import {Settings} from "../../config/settings";
import InputText from "../shared/InputText";
import BlackButton from "../shared/BlackButton";
import {Transition} from "react-navigation-fluid-transitions";
import TextLinked from "../shared/TextLinked";
import {verticalScale} from "../../config/responsiveness";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(verticalScale(Settings.NORMAL_LOGO_HEIGHT));
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }


  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 200,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: 200,
        toValue: Settings.SMAL_LOGO_HEIGHT
      })
    ]).start();
  };

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 200,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: 200,
        toValue: verticalScale(Settings.NORMAL_LOGO_HEIGHT),
      }),
    ]).start();
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Transition appear="horizontal">
        <Animated.View style={{paddingBottom: this.keyboardHeight}}>
          <View style={styles.homeContainer}>
            <Animated.Image
              fadeDuration={0}
              style={[styles.logo, {maxHeight: this.imageHeight}]}
              defaultSource={Settings.LOGO}
              source={Settings.LOGO}/>
            <Text style={styles.loginText}>Já possui uma conta? Faça login.</Text>
            <InputText style={styles.input} placeholder={"USUÁRIO"}/>
            <InputText style={styles.input} placeholder={"SENHA"}/>
            <BlackButton style={{marginTop: '5%', marginBottom: '3%'}} text={"Acessar"}/>
            <Text style={[styles.loginText, {marginBottom: '3%'}]}>Ainda não possui conta?</Text>
            <TextLinked textStyle={styles.textLinked} onPress={() => navigate("Signup")} text={"CRIAR CONTA"}/>
            <TextLinked textStyle={styles.textLinked} onPress={() => navigate("Home")} text={"ENTRAR COM O FACEBOOK"}/>
          </View>
        </Animated.View>
      </Transition>
    );
  }
}

const styles = new StyleSheet.create({
  homeContainer: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    maxWidth: '100%'
  },
  loginText: {
    color: Colors.white,
    fontSize: verticalScale(16)
  },
  input: {
    marginTop: '3%'
  },
  textLinked: {
    textDecorationLine: 'underline',
    fontSize: verticalScale(15)
  }
});