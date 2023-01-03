import LoginScreen from './src/views/LoginScreen';
import AfterLogin from './src/views/AfterLogin';
import Intro from './src/views/Intro';
import Home from './src/views/Home';
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
        <Stack.Screen name="AfterLogin" component={AfterLogin} />
        <Stack.Screen name="Home" component={Home}/>
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