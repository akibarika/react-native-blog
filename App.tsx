import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/RootStackPrams';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Index'>
        <Stack.Screen
          name="Index"
          options={{title: 'Blogs'}}
          component={IndexScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>
};
