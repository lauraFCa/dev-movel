import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function ActionsButton({ label, icon }) {
    return (
        <View>
            <TouchableOpacity style={st.actionBtn}>
                <View style={st.areaBtn}>
                    <AntDesign name={icon} size={26} color='#000' />
                </View>
                <Text style={st.labelBtn}>{label}</Text>
            </TouchableOpacity>
        </View>
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
    actionBtn: {
        alignItems: "center",
        marginRight: 32,
    },
    areaBtn: {
        backgroundColor: '#ecf0f1',
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center', //vertical
        alignItems: "center", //horizontal
    },
    labelBtn: {
        marginTop: 4,
        textAlign: "center",
        fontWeight: 'bold'
    },
})