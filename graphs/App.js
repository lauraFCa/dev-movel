import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import BarCharts from './src/ChartsSvg/BarCharts';
import LineCharts from './src/ChartsSvg/LineCharts';
import PizzaCharts from './src/ChartsSvg/PizzaCharts';

import BarKitCharts from './src/ChartsKit/BarKitCharts';
import LineKitCharts from './src/ChartsKit/LineKitCharts';
import PizzaKitCharts from './src/ChartsKit/PizzaKitCharts';

import Compare from './src/Compare';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bars" component={BarCharts} />
        <Stack.Screen name="Lines" component={LineCharts} />
        <Stack.Screen name="Pizzas" component={PizzaCharts} />
        <Stack.Screen name="BarsKit" component={BarKitCharts} />
        <Stack.Screen name="LinesKit" component={LineKitCharts} />
        <Stack.Screen name="PizzasKit" component={PizzaKitCharts} />
        <Stack.Screen name="Compare" component={Compare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
