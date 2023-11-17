import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';
import data from './data.json'

export default function Home({ navigation }) {

    const tableHead = Object.keys(data[0]);
    const tableRows = data.map(obj => Object.values(obj));

    const sizes = [70, 51, 115, 118, 80, 94, 88, 70, 80, 80];

    return (
        <View>
            <ScrollView style={{ height: '100%' }}>
                <ScrollView horizontal={true}>
                    <View style={styles.table}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row
                                data={tableHead}
                                widthArr={sizes}
                                style={styles.head}
                                textStyle={{
                                    margin: 6,
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            />
                            <Rows
                                data={tableRows}
                                widthArr={sizes}
                                textStyle={{
                                    margin: 6,
                                    textAlign: 'center',
                                }}
                            />
                        </Table>
                    </View>
                </ScrollView>
                <View style={styles.libView}>
                    <Text style={styles.libTitle}>react-native-svg-charts</Text>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Bars")}}>
                        <Text style={styles.linkText}>Graficos de Barras</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Lines")}}>
                        <Text style={styles.linkText}>Graficos de Linhas</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Pizzas")}}>
                        <Text style={styles.linkText}>Graficos de Pizza</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.libView}>
                    <Text style={styles.libTitle}>react-native-chart-kit</Text>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("BarsKit")}}>
                        <Text style={styles.linkText}>Graficos de Barras</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("LinesKit")}}>
                        <Text style={styles.linkText}>Graficos de Linhas</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("PizzasKit")}}>
                        <Text style={styles.linkText}>Graficos de Pizza</Text>
                        <AntDesign name="link" size={18} color="black" style={styles.linkIcon} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.compBtn} onPress={()=>{
                    navigation.navigate("Compare")
                }}>
                    <Text>Comparativo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
    textH: {
        margin: 6,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    libView: {
        margin: 16
    },
    libTitle: {
        fontSize: 24,
        marginBottom: 10
    },
    subTitle:{
        fontSize: 18,
        marginBottom: 24,
        fontStyle: 'italic'
    },
    linkText: {
        fontSize: 18,
        marginRight: 8
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24
    },
    bottom: {
        position: 'absolute',
        bottom: 20,
        right: '36%'
    },
    compBtn: {
        borderWidth: 1,
        backgroundColor: '#f1f8ff',
        width: "100%",
        padding: 12
    }
})