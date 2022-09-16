import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreditFormScreen from './screens/CreditForm/CreditFormScreen';
import CreditDetailsScreen from './screens/CreditDetails/CreditDetailsScreen';
import LandingScreen from './screens/Landing/LandingScreen';

const Stack = createNativeStackNavigator()

function App() {
  return(

     <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Landing" component={ LandingScreen } />
        <Stack.Screen name="CreditForm" component={ CreditFormScreen } />
        <Stack.Screen name="CreditDetails" component={ CreditDetailsScreen } />

      </Stack.Navigator>

       <StatusBar style="auto" />
    </NavigationContainer>

  )
}

export default App
