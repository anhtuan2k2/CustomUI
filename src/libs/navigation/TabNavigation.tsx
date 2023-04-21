import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '@styles';

// grabs stacks
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import CartStack from './CartStack';
import MoreStack from './MoreStack';

// icons
import SvgDownloads from '@assets/customDrawer/icons/Svg.Downloads';
import SvgHome from '@assets/customDrawer/icons/Svg.Home';
import SvgMenu from '@assets/customDrawer/icons/Svg.Menu';
import SvgSearch from '@assets/customDrawer/icons/Svg.Search';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor: Colors.grayF4,
      tabBarIcon: ({color}) => {
        let icon = <SvgHome fill={color} />;

        if (route.name === 'SearchStack') {
          icon = <SvgSearch fill={color} />;
        } else if (route.name === 'CartStack') {
          icon = <SvgDownloads fill={color} />;
        } else if (route.name === 'MoreStack') {
          icon = <SvgMenu fill={color} />;
        }

        return icon;
      },
      tabBarStyle: {
        backgroundColor: Colors.black,
        borderTopColor: Colors.black,
      },
    })}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="SearchStack"
      component={SearchStack}
      options={{
        tabBarLabel: 'Search',
      }}
    />
    <Tab.Screen
      name="CartStack"
      component={CartStack}
      options={{
        tabBarLabel: 'Downloads',
      }}
    />
    <Tab.Screen
      name="MoreStack"
      component={MoreStack}
      options={{
        tabBarLabel: 'More',
      }}
    />
  </Tab.Navigator>
);
