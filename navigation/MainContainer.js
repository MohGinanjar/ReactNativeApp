import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import SettingScreen from './screen/SettingScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon:({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            console.log(rn);
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          "tabBarActiveTintColor": "tomato",
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle": {
            "paddingBottom": 10,
            "fontSize": 10
          },
        }}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailScreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;