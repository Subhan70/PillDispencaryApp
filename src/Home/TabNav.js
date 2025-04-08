import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../Profile/Profile";
import Home from "./Home";
import MultiProfile from "../Profile/MultiProfile";
import {Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import Schedule from "../Schedule/Schedule";

const Tab = createBottomTabNavigator();

export default function TabNav({navigation}){
    return(
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 60 },
          tabBarActiveTintColor: '#ec6f4a',
          tabBarInactiveTintColor:'black',
          tabBarLabelStyle: {
            fontSize: 12,
          },
      }}>
          <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons name={focused?"home":"home-outline"} size={30} color={focused?"#ec6f4a":'black'} />
      ),
          }}/>  
          <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name={focused?"account-edit":"account-edit-outline"} size={30} color={focused?"#ec6f4a":'black'}  />
      ),
          }}/> 
                    <Tab.Screen name="Schedule" component={Schedule}
          options={{
            tabBarLabel: 'Schedules',
            tabBarIcon: ({focused}) => (
              <Ionicons name={focused?"calendar":"calendar-outline"} size={30} color={focused?"#ec6f4a":'black'}  />
      ),
          }}/> 
                    <Tab.Screen name="Multiple Profile" component={MultiProfile}
          options={{
            tabBarLabel: 'Switch Account',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name={focused?"account-convert":"account-convert-outline"} size={30} color={focused?"#ec6f4a":'black'}  />
      ),
          }}/> 
        </Tab.Navigator>
    );
}
