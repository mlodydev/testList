import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './MainScreen'
import InternalBrowser from './InternalBrowser'

const AppNavigator = createStackNavigator(
    {
        Main: MainScreen,
        OpenBrowser: InternalBrowser
    },
)

const App = createAppContainer(AppNavigator)

export default App