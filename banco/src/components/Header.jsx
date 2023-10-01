import React from 'react';
import { View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti';

// statusbar.currentHeight funciona apenas em Android
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
// se for Android, a propriedade existe |  se for ios, padding sera 64


export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <MotiView style={styles.content} 
            from={{
                translateY: -150,
                opacity: 0
            }} animate={{
                translateY: 0,
                opacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 1000, //ms
                delay: 300 //ms
            }}
            >
                <MotiText style={styles.userName}
                from={{
                    translateX: -300,
                }} animate={{
                    translateX: 0,
                }}
                transition={{
                    type: 'timing',
                    duration: 1000, //ms
                    delay: 300 //ms
                }}
                >
                    {name}
                </MotiText>
                <TouchableOpacity activeOpacity={0.9} style={styles.btnUser}>
                    <Feather name='user' size={27} color={'#fff'} />
                </TouchableOpacity>
            </MotiView>
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