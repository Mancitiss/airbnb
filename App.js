import LoginScreen from './src/views/LoginScreen';
import AfterLogin from './src/views/AfterLogin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
          }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="AfterLogin" component={AfterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}