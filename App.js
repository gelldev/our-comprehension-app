import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import SplashScreen from './component/SplashScreen';
import CourseList from './component/CourseList';
import Questions from './component/Questions';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen  name="Kudos" component={SplashScreen} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
