import {createAppContainer} from "react-navigation";
import HomeScreen from "../components/home/HomeScreen";
import LoginScreen from "../components/home/LoginScreen";
import SignupScreen from "../components/home/SignupScreen";
import { FluidNavigator } from "react-navigation-fluid-transitions";


const HomeNavigator = FluidNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {header: null}
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {header: null},
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
