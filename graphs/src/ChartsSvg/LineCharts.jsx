import React from 'react'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { Text, View, StyleSheet } from 'react-native';


export default function LineCharts({ navigation }) {
    const salario = [5000, 4000, 1200, 6500];
    const expeciencia = [3, 5, 1, 8];

    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={styles.graphTitle}>react-native-svg-charts</Text>
            <Text style={styles.graph}>Salário vs Tempo de Experiência (ano)</Text>
            <View style={{flexDirection: 'row'}}>
                <YAxis data={salario} contentInset={{ top: 20, bottom: 20 }}
                    svg={{ fill: 'grey', fontSize: 10, }} numberOfTicks={8} formatLabel={(value) => `R$ ${value}`} />
                <View style={{flexDirection: 'column', width: '88%'}}>
                    <LineChart
                        style={{ height: 200 }}
                        data={salario}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Grid />
                    </LineChart>

                    <XAxis
                        style={{}} data={expeciencia}
                        formatLabel={(value, index) => index} contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }} numberOfTicks={8}
                    />
                </View>
            </View>
        </View>
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