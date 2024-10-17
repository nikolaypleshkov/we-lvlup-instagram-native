import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Icon from "react-native-vector-icons/Foundation";
import FeatherIcon from "react-native-vector-icons/Feather";

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === "Search") {
            return <FeatherIcon name="search" size={size} color={color} />;
          } else if (route.name === "Chat") {
            return <FeatherIcon name="send" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return (
              <MaterialCommunityIcon
                name="account-circle-outline"
                size={size}
                color={color}
              />
            );
          } else iconName = "";
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 30,
          height: 90,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false  }}
      />
      <Tab.Screen
        name="Chat"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false  }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false  }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
