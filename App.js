import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Post from './screens/Posts';
import BottomTab from './screens/BottomTab';

const Stack=createStackNavigator()

export default function App() {
  return (
  <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Tab'>
    <Stack.Screen name='Tab' component={BottomTab} options={{headerShown:false}}></Stack.Screen>

      <Stack.Screen name='Posts' component={Post} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
