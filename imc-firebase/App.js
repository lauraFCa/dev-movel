import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Result from './src/Screens/Result';
import Results from './src/Screens/Results';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Calculadora" }} />
        <Stack.Screen name="Result" component={Result} options={{ headerTitle: "Resultado" }}/>
        <Stack.Screen name="Results" component={Results} options={{ headerTitle: "Resultados" }}/>
      </Stack.Navigator>
    </NavigationContainer >
  );

}
