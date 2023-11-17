import React from 'react'
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width;

export default function PizzaKitCharts({ navigation }) {
    const data = [
        {
            name: "Desenvolvedor",
            salario: 5000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Designer",
            salario: 4000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Estagiario",
            salario: 1200,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Analista",
            salario: 6500,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }        
    ];
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
        <View style={{ height: '100%', marginTop: 15, marginLeft: 8 }}>
            <Text style={styles.graphTitle}>react-native-chart-kit</Text>
            <Text style={styles.graph}>Salário vs Profissão</Text>
            <PieChart
                data={data}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                accessor={"salario"}
                backgroundColor={"transparent"}
                center={[0, 0]}
                absolute
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
        fontSize: 16,
        textAlign: 'center'
    }
})