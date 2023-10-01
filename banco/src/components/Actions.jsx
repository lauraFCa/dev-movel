import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ActionsButton from './ActionsButton'


export default function Actions() {
    return (
        <ScrollView style={st.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <ActionsButton label='Entradas' icon='addfolder' />
            <ActionsButton label='Compras' icon='tagso' />
            <ActionsButton label='Carteira' icon='creditcard' />
            <ActionsButton label='Boletos' icon='barcode' />
            <ActionsButton label='Conta' icon='setting' />            
        </ScrollView>
    )
}

const st = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
})