import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native'
import { Colors, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import * as s from '../static/components'
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';


const list = [
    {
        id: 1,
        label: 'boleto conta de luz',
        value: '300,90',
        date: '17/09/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'salario',
        value: '3500,00',
        date: '15/09/2023',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'pix cliente',
        value: '280,50',
        date: '26/09/2023',
        type: 1 // receita
    },
]

export default function Home() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <s.SView style={[st.container, {
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }]}>
                <Header name="Fulano da Silva" />

                <Balance saldo='3.520,80' gastos='-857,32' />

                <Actions />

                <Text style={st.title}>Últimas movimentações</Text>

                <FlatList
                    style={st.list}
                    data={list}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Movements props={item} />
                    }
                />
                <LearnMoreLinks />
            </s.SView>
        </SafeAreaView>
    );
}


const st = StyleSheet.create({
    container: {

        height: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginTop: 20,
        marginRight: 14,
        marginBottom: 20
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})