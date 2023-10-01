import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';

export default function Balance({saldo, gastos}) {
    return (
        <MotiView style={st.container}
        from={{
            rotateX: '-100deg',
            opacity: 0, 
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1,
        }}
        transition={{
            type: 'timing',
            delay: 600,
            duration: 500
        }}
        >
            <View style={st.item}>
                <Text style={st.itemTitle}>Saldo</Text>
                <View style={st.content}>
                    <Text style={st.currency}>R$</Text>
                    <Text style={st.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={st.item}>
                <Text style={st.itemTitle}>Gastos</Text>
                <View style={st.content}>
                    <Text style={st.currency}>R$</Text>
                    <Text style={st.expenses}>{gastos}</Text>
                </View>
            </View>
        </MotiView>
    )
}

const st = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: .3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -40,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
    },
    item: {
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currency: {
        color: '#DADADA',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})