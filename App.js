import LoginScreen from './src/views/LoginScreen';
import Intro from './src/views/Intro';
import DetailScreen from './src/views/DetailScreen';
import Welcome from './src/views/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from './src/views/Search';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}