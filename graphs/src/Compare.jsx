import { Text, View, StyleSheet } from "react-native";


export default function Compare({ navigation }) {

    return (
        <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 20 }}>
                O <Text numberOfLines={1} style={styles.lib}>react-native-chart-kit</Text> oferece facilidade de uso com configurações simples, mas pode ter opções limitadas.
            </Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
                O <Text style={styles.lib}>react-native-svg-charts</Text> proporciona maior flexibilidade com a manipulação direta de SVG, permitindo personalização avançada.
            </Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
                A curva de aprendizado pode ser maior para o segundo, mas a manutenção fica mais fácil pela modularidade e documentação detalhada.
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20 }}>Para a atividade em questão, foi mais fácil utilizar o <Text style={styles.lib}>react-native-chart-kit</Text>, devido a baixa curva de aprendizado.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lib: {
        fontStyle: 'italic',
        color: '#000094'
    }
})