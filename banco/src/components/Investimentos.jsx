
import { View, Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { AnimatePresence, MotiText } from 'moti';

export default function Investimentos({ props }) {
    console.log(props)
    return (
        <View style={st.container}>
            <Text style={st.data}>
                {/* {props.Id} */}
            </Text>
            <View style={st.content}>
                <Text style={st.label}>{props.Empresa}</Text>


                <AnimatePresence exitBeforeEnter>
                    <MotiText style={props.Porcentagem < 10 ? st.value : st.expenses}
                        from={{
                            translateX: 100
                        }}
                        animate={{
                            translateX: 0
                        }}
                        transition={{
                            type: 'timing',
                            duration: 500
                        }}
                    >
                        {props.Porcentagem < 10 ? `${props.Porcentagem}%` : `-${props.Porcentagem}%`}
                    </MotiText>
                </AnimatePresence>



            </View>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: .5,
        borderBottomColor: '#dadada',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    data: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 15,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 15,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    }

})