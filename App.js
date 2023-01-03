import LoginScreen from './src/views/LoginScreen';
import Welcome from './src/views/Welcome';
import Search from './src/views/Search';
import Intro from './src/views/Intro';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator 
  //       screenOptions={{
  //         headerShown: false
  //         }}
  //     >
  //       <Stack.Screen
  //         name="Login"
  //         component={LoginScreen}
  //       />
  //       <Stack.Screen name="AfterLogin" component={AfterLogin} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}