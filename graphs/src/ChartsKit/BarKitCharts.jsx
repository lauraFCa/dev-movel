import React from 'react';
import { ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width;

export default function BarKitCharts({ navigation }) {
    const salario = [5000, 4000, 1200, 6500];
    const profissao = ["Desenvolvedor", "Designer", "Estagiário", "Analista"]
    const expeciencia = [3, 5, 1, 8]

    const data = {
        labels: profissao,
        datasets: [
            {
                data: salario
            }
        ]
    };

    
    const data2 = {
        labels: expeciencia,
        datasets: [
            {
                data: salario
            }
        ]
    };


    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => "rgba(0,0,0,.9)",
        strokeWidth: 1,
        barPercentage: 0.5,
        
    };

    return (
        <>
            <ScrollView style={{ margin: 12 }}>
                <Text style={styles.graphTitle}>react-native-chart-kit</Text>
                <Text style={styles.graph}>Salário vs Tempo de Experiencia (anos)</Text>
                <BarChart
                style={{marginLeft: 5}}
                    data={data2}
                    width={screenWidth-5}
                    height={300}
                    yAxisLabel="R$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={10}
                    horizontalLabelRotation={0}
                    withInnerLines={true}
                    showBarTops={false}
                    fromZero={true}
                />

                <Text style={styles.graph}>Salário vs Profissão</Text>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={300}
                    yAxisLabel="R$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={10}
                    horizontalLabelRotation={-20}
                    withInnerLines={true}
                    showBarTops={false}
                    fromZero={true}
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