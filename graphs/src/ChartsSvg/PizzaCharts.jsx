import React from "react"
import { PieChart } from 'react-native-svg-charts'
import { Text, View, StyleSheet } from 'react-native';

export default function PizzaCharts({ navigation }) {

    const salario = [5000, 4000, 1200, 6500];

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = salario
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.graphTitle}>react-native-svg-charts</Text>
            <Text style={styles.graph}>Média de Salários da Empresa</Text>
            <PieChart style={{ height: 200 }} innerRadius={0} padAngle={0} labelRadius={10}
                data={pieData} />
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
        textAlign: 'center',
        marginBottom: 10
    }
})