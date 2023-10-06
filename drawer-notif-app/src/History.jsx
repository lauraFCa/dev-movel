import React, { useState } from 'react';
import {
    Pressable,
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export default function History({ navigation }) {
    const [semanal, setSemanal] = useState('')
    const [mensal, setMensal] = useState('')

    viewWeeklyHistory = () => {
        console.log('view por semana');
        setMensal('');
        setSemanal('visualizacao semanal');
    };

    viewMonthlyHistory = () => {
        console.log('view por mes');
        setSemanal('');
        setMensal('visualizacao mensal');

    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <PageHeader title="Histórico" />

            <View style={styles.btns}>
                <Button title="Histórico Semanal" onPress={this.viewWeeklyHistory} />
                <Text>{semanal}</Text>
                <Button title="Histórico Mensal" onPress={this.viewMonthlyHistory} />
                <Text>{mensal}</Text>
            </View>

            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    btns: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        textAlign: "center",
        alignItems: "center"
    }
})