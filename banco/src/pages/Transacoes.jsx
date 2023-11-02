
import { FlatList, StyleSheet, StatusBar } from 'react-native'
import * as s from '../static/components'
import Movements from '../components/Movements';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64


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

export default function () {
    return (
        <s.SView style={st.container}>

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
    )
}


const st = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: statusBarHeight,
        backgroundColor: '#9e9e9e'
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