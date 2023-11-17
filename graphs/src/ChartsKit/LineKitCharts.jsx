import React from "react"
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function LineKitCharts({ navigation }) {
    const salario = [5000, 4000, 1200, 6500];
    const expeciencia = [3, 5, 1, 8];
    const profissao = ["Desenvolvedor", "Designer", "Estagiário", "Analista"];

    const data = {
        labels: expeciencia,
        datasets: [
            {
                data: salario,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2
            }
        ],
        legend: ["Salário"]
    };
    const data2 = {
        labels: profissao,
        datasets: [
            {
                data: salario,
            }
        ],
        legend: ["Salário"]
    };

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    return (
        <View style={{ margin: 15 }}>
            <Text style={styles.graphTitle}>react-native-chart-kit</Text>
            <Text style={styles.graph}>Salário vs Tempo de Experiência (ano)</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />

            <Text style={styles.graphTitle}></Text>
            <Text style={styles.graph}>Salário vs Profissão</Text>
            <LineChart
                data={data2}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
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