import SelectCategoryScreen from "./components/activityRegister/SelectCategoryScreen";
import LastInfosScreen from "./components/activityRegister/LastInfosScreen";
import LetsBeginScreen from "./components/activityRegister/LetsBeginScreen";
import SendPictureScreen from "./components/activityRegister/SendPictureScreen";
import TellUsMoreScreen from "./components/activityRegister/TellUsMoreScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";

const ActivityNavigator = createStackNavigator(
  {
    LetsBegin: {
      screen: LetsBeginScreen,
      navigationOptions: {
        header: null
      }
    },
    LastInfos: { screen: LastInfosScreen },
    SelectCategory: { screen: SelectCategoryScreen },
    SendPicture: { screen: SendPictureScreen },
    TellUsMore: { screen: TellUsMoreScreen }
  },
  {
    initialRouteName: "LetsBegin"
  }
);

const ActivityNavigatorContainer = createAppContainer(ActivityNavigator);

export default ActivityNavigatorContainer;
