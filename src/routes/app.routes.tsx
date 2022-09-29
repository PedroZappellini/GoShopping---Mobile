import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Initial from '../pages/Initial';
import List from '../pages/List';
import Background from '../components/Background';
import {View} from 'react-native';

const Routes = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Routes.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#141414',
        },
      }}>
      <Routes.Screen name="Home" component={Home} />
      <Routes.Screen name="Initial" component={Initial} />
      <Routes.Screen name="List" component={List} />
    </Routes.Navigator>
  );
};

export default AppRoutes;
