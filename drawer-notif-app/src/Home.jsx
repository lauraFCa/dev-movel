import React, { useState } from 'react';
import {
    Pressable,
    View,
    Text,
    ProgressBarAndroid,
    StyleSheet
} from 'react-native';
import Marker from '../components/Marker';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';


export default function Home({ navigation }) {
    const [progress, setProgress] = useState(0);
    const [congrats, setCongrats] = useState(false)

    markAsDrunk = () => {
        let p2 = progress + 0.1;
        if (p2 < 1)
            setProgress(p2);
        if (Math.round(p2 * 100) >= 100) {
            setCongrats(true)
        }

        console.log(p2)
    };
    return (
        <View style={styles.container}>
            
            <PageHeader title="Marque aqui o seu progresso!" />

            <View style={styles.progress}>
                <Text style={{ textAlign: 'center', }}>{Math.round(progress * 100)}%</Text>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={progress}
                    width={200}
                    color="#3498db"
                />
            </View>

            <View style={styles.markOptions}>
                <Pressable style={styles.mark} onPress={() => this.markAsDrunk()}>
                    <Marker icon='boat' value='200' />
                </Pressable>
                <Pressable style={styles.mark} onPress={() => this.markAsDrunk()}>
                    <Marker icon='boat' value='350' />
                </Pressable>
                <Pressable style={styles.mark} onPress={() => this.markAsDrunk()}>
                    <Marker icon='boat' value='800' />
                </Pressable>
            </View>

            <View style={[styles.successContainer, { display: congrats ? 'flex' : 'none' }]}>
                <Text style={styles.successText}>Parabens! Voce atingiu a meta!</Text>
            </View>

            <Pressable
                onPress={() => navigation.navigate('Historico')}
                style={styles.goTo}>
                <Text>Ver histórico</Text>
            </Pressable>

            <Footer navigation={navigation} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    header: {
        marginTop: 40,
        width: '100%',
        backgroundColor: '#c5c5c5',
        textAlign: 'center',
        padding: 10
    },
    progress: {
        marginTop: 50,
        padding: 10,

    },
    mark: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#3498db',
        borderStyle: 'solid',
        borderRadius: 100,
        width: 80,
        margin: 5
    },
    markOptions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goTo: {
        padding: 10,
        marginBottom: 0,
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    successContainer: {
        backgroundColor: '#4CAF50', // Cor de fundo atraente (verde)
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successText: {
        color: 'white', // Cor do texto
        fontSize: 18, // Tamanho da fonte
        fontWeight: 'bold', // Texto em negrito
    },
})