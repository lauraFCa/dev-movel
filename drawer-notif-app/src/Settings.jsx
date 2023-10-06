import React, { useState } from 'react';
import {
    Pressable,
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Keyboard
} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export default function Settings({ navigation }) {
    const [metrica, setMetrica] = useState('3000')
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    saveSettings = () => {
        if (!weight || !height || !selectedValue) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const numericWeight = parseFloat(weight);
        const numericHeight = parseFloat(height);

        if (isNaN(numericWeight) || isNaN(numericHeight)) {
            alert('Peso e altura devem ser números válidos.');
            return;
        }
        Keyboard.dismiss();
        let waterIntake = 0;
        if (selectedValue === 'Masculino') {
            // Fórmula de ingestão de água para homens
            waterIntake = (35 * numericWeight) + (0.6 * numericHeight);

        } else if (selectedValue === 'Feminino') {
            // Fórmula de ingestão de água para mulheres
            waterIntake = (31 * numericWeight) + (0.5 * numericHeight);
        }
        setMetrica(waterIntake);
    };


    return (
        <View style={styles.container}>
            <PageHeader title="Configurações" />

            <View style={{ marginBottom: 30 }}>
                <Text style={{ margin: 5, paddingBottom: 20, paddingTop: 20 }}>Preencha abaixo seus dados para maior acertivide na definição de injestão de água</Text>
                <TextInput style={styles.textInput}
                    placeholder="Peso"
                    onChangeText={(text) => setWeight(text)}
                    keyboardType="numeric"
                />
                <TextInput style={styles.textInput}
                    placeholder="Altura"
                    onChangeText={(text) => setHeight(text)}
                    keyboardType="numeric"
                />

                <Picker style={styles.textInput}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Selecione uma opção" value="" />
                    <Picker.Item label="Feminino" value="Feminino" />
                    <Picker.Item label="Masculino" value="Masculino" />
                </Picker>

            </View>

            <Button title="Salvar Configurações" onPress={this.saveSettings} />

            <Text style={{ marginTop: 40 }}>Injestão de água sugerida:</Text>
            <Text style={{ margin: 8, fontWeight: 500, fontSize: 20 }}>{metrica}ml</Text>
            <Text style={{ fontSize: 11, marginTop: 10 }}>Valores diários</Text>

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
    textInput: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        borderRadius: 8,
        margin: 5
    },
})