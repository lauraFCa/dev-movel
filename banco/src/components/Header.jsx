import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


// statusbar.currentHeight funciona apenas em Android
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
// se for Android, a propriedade existe |  se for ios, padding sera 64


export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>
                    {name}
                </Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.btnUser}>
                    <Feather name='user' size={27} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        flexDirection: 'row',
        paddingTop: statusBarHeight,
        paddingStart: 10,
        paddingEnd: 16,
        paddingBottom: 55,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
    },
    btnUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }

})