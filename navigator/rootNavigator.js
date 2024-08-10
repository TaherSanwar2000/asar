import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YesNoScreen from '../screens/YesNoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainHome" component={MyTabs} />
      <Stack.Screen name="YesNO" component={YesNoScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            return <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />;
          } else if (route.name === 'Settings') {
            return <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />;
          }
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
