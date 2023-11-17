import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'


export default function BarCharts({ navigation }) {
    const salario = [5000, 4000, 1200, 6500];
    const expeciencia = [3, 5, 1, 8];


    return (
        <>
            <ScrollView style={{ margin: 12 }}>
                <Text style={styles.graphTitle}>react-native-svg-charts</Text>
                <Text style={styles.graph}>Salário vs Tempo de Experiência (ano)</Text>
                <View style={{ height: 200, flexDirection: 'row' }}>
                    <YAxis data={salario} contentInset={{ top: 20, bottom: 20 }}
                        svg={{ fill: 'grey', fontSize: 10, }} numberOfTicks={8} formatLabel={(value) => `R$ ${value}`} />
                    <BarChart style={{ flex: 1, marginLeft: 16 }}
                        data={salario} svg={{ stroke: 'rgb(134, 65, 244)' }} contentInset={{ top: 20, bottom: 20 }}>
                        <Grid />
                    </BarChart>
                </View>
                <XAxis
                    style={{ marginLeft: 60, marginRight: 10, marginTop: 10 }} data={expeciencia}
                    formatLabel={(value, index) => index} contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }} numberOfTicks={8}
                />
            </ScrollView>
        </>
    )

}

const styles = StyleSheet.create({
    graphTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16
    },
    graph: {
        fontSize: 12,
        textAlign: 'center'
    }
})