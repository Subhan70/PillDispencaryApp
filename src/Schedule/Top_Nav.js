import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tablets from './Tablet';
import SelfCare from './SelfCare';
import Tests from './Tests';
import { FontAwesome5,MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { height: 60,backgroundColor:'#f9f8f0'},
      tabBarLabelStyle: {
        fontSize: 12,
      },
  }}>
       <Tab.Screen name="Tablets" component={Tablets}
          options={{
            tabBarLabel: 'Tablets',
            tabBarIcon: ({focused}) => (
              <FontAwesome5 name={focused?"tablets":"pills"} size={20} color='black'/>
      ),
          }}/>  
      <Tab.Screen name="SelfCare" component={SelfCare}
          options={{
            tabBarLabel: 'Self-Care',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name={focused?"account-heart":"head-heart-outline"} size={25} color='black'/>
      ),
          }}/> 
      <Tab.Screen name="Test" component={Tests}
          options={{
            tabBarLabel: 'Test',
            tabBarIcon: ({focused}) => (
              <Fontisto name={focused?"blood-test":"doctor"} size={25} color='black'/>
      ),
          }}/>
    </Tab.Navigator>
  );
}