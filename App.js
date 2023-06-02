import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native'
import { Dashboard }  from './src/screens/dashboard';
import { Calculation } from './src/screens/calculation';


const Stack = createNativeStackNavigator()

export default function App() {
  

  return (
   
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Calculation"component={Calculation} />
        </Stack.Navigator>
    </NavigationContainer>
   
  );
}
