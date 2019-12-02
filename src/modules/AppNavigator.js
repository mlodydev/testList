import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './Screens/MainScreen/MainScreen';
import InternalBrowserScreen from './Screens/InternalBrowserScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    InternalBrowser: InternalBrowserScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(AppNavigator);

export default App;
