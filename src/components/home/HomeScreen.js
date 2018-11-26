import React, {Component} from "react";
import {Text, View, StyleSheet, Image, Dimensions, Animated} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "../../config/colors";
import TextLinked from "../shared/TextLinked";
import {Transition} from "react-navigation-fluid-transitions";
import {Settings} from "../../config/settings";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Transition appear="horizontal">
        <View style={styles.container}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.homeContainer}
            colors={[Colors.home1, Colors.home2]}>
            <Image
              fadeDuration={0}
              style={styles.logo}
              defaultSource={Settings.LOGO}
              source={require('../../../assets/oldLogo.png')}/>
            <View style={styles.containerIntroduction}>
              <Text style={
                {fontWeight: '700', color: Colors.white, fontSize: 18}
              }> Oi :) </Text>
              <Text style={{color: Colors.white, fontSize: 18}}>Somos uma plataforma para conectar pessoas com
                açeõs locais e estamos aqui para
                <Text style={{fontWeight: '700'}}>te dar Uma Mão. </Text>
              </Text>
              <Text style={
                {color: Colors.white, fontSize: 18, marginTop: "5%"}
              }>Queremos incentivar a convivência de moradores do mesmo bairro para
                compartilhar momentos e ocupar espaços públicos. As grandes mudanças
                acontecem com pequenas ações.
              </Text>
              <Text style={
                {fontWeight: '700', color: Colors.white, fontSize: 18, marginTop: "5%", marginBottom: "5%"}
              }>Vamos?</Text>
            </View>
            <TextLinked onPress={() => navigate("Login")} text={"Acessar"} icon={"arrow-forward"}/>
          </LinearGradient>
        </View>
      </Transition>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center'
  },
  homeContainer: {
    minWidth: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    maxHeight: '25%',
    resizeMode: 'contain',
    maxWidth: '100%'
  },
  containerIntroduction: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '80%'
  }
});
