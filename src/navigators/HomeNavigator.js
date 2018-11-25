import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "../components/home/HomeScreen";
import LoginScreen from "../components/home/LoginScreen";
import SignupScreen from "../components/home/SignupScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {header: null}
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {header: null}
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {header: null}
    }
  },
  {
    initialRouteName: "Home"
  }
);

const HomeNavigatorContainer = createAppContainer(HomeNavigator);

export default HomeNavigatorContainer;
