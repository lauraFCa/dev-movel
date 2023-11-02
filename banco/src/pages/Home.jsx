import { FlatList, StyleSheet, Text } from 'react-native'
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

export default function Home({navigation}) {
    const nome = "Fulano da Silva";

    return (
        <s.SView style={st.container}>
            <Header name={nome} navigation={navigation}/>
            
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
        </s.SView>
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