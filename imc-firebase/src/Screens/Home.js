import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export default function Home({ navigation }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {});

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (altura === '' || peso === '') {
      setErro('Por Favor, preencha o peso  e a altura corretamente !');
    } else if (!alt) {
      setErro('Por Favor, preencha o peso  e a altura corretamente !');
    } else {
      let mensagem = '';
      if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        mensagem = 'Sobrepeso';
      } else if (imc >= 30.0 && imc < 34.9) {
        mensagem = 'Obesidade grau I';
      } else if (imc >= 35 && imc < 39.9) {
        mensagem = 'Obesidade grau II';
      } else if (imc >= 40) {
        mensagem = 'Obesidade grau III';
      }

      const x = {
        imc: imc,
        altura: altura,
        peso: peso,
        resultado: mensagem,
      };

      sendData(x);
    }
  }

  const sendData = (data) => {
    console.log('senddata');
    navigation.navigate('Result', { dados: data, navigation: navigation });
  };

  return (
    <View style={styles.centered}>
      <Text style={styles.title}> Calculadora do IMC</Text>

      <View>
        <Text style={styles.label}>Informe sua altura: (cm)</Text>
        <TextInput
          style={styles.txtInput}
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(altura) => setAltura(altura)}
        />

        <Text style={styles.label}>Informe seu peso: (kg)</Text>
        <TextInput
          style={styles.txtInput}
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(peso) => setPeso(peso)}
        />
      </View>

      <View>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <TouchableOpacity style={styles.btn} onPress={calcularIMC}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{ color: '#8b0c0c', textAlign: 'center', fontWeight: 'bold' }}>
          {erro}
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigation.navigate('Results');
          }}>
          <Text style={{ textAlign: 'center', color: '#fff' }}>
            Resultados anteriores
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontWeight: 'bold',
  },
  label: {
    width: 300,
    marginTop: 15,
    marginBottom: 3,
  },
  txtInput: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 40,
    padding: 5,
    marginBottom: 5,
  },
  btn: {
    width: 100,
    backgroundColor: '#00aeff',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn2: {
    width: 200,
    backgroundColor: '#00aeff',
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
