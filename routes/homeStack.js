import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../screens/LoginPage';
import Stores from '../screens/Stores';
import StoreView from '../screens/StoreView';

const screens = {
    LoginPage: {
        screen: LoginPage,
    },
    Stores: {
        screen: Stores,
    },
    StoreView:{
        screen: StoreView,
    }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);