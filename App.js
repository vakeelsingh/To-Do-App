// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import CreatePostScreen from "./CreatePostScreen";
import RecyclerList from "./RecyclerView";


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Stack.Screen name="RecyclerList" component={RecyclerList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;