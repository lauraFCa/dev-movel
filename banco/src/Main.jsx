import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Transacoes from './pages/Transacoes';
import Perfil from './pages/Perfil';

const Drawer = createDrawerNavigator();


export default function Main() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Transacoes" component={Transacoes} />
                <Drawer.Screen name="Perfil" component={Perfil} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
