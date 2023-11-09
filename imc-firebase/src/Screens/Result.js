import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Storage from '../database/firebaseMethods';

const storage = new Storage();

export default function Result({ navigation, route }) {
  const [successMsg, setSuccessMsg] = useState('');

  const currentDate = () => {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
    return dataFormatada;
  };

  const saveUserData = () => {
    const dds = route.params.dados;
    if (dds != undefined) {
      let dadosUser = {
        ...dds,
        data: currentDate(),
      };
      console.log(dadosUser);

      let result = storage.add(dadosUser);
      setSuccessMsg(result);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.day}>{currentDate()}</Text>
        <View style={styles.row}>
          <Text style={styles.header}>Altura</Text>
          <Text style={styles.cell}>{route.params.dados.altura} cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Peso</Text>
          <Text style={styles.cell}>{route.params.dados.peso} kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>IMC</Text>
          <Text style={styles.cell}>{route.params.dados.imc}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Resultado</Text>
          <Text style={styles.cell}>{route.params.dados.resultado}</Text>
        </View>
        <TouchableOpacity
          onPress={saveUserData}
          style={{
            backgroundColor: 'darkblue',
            width: 150,
            margin: 10,
            padding: 10,
            borderRadius: 8,
          }}>
          <Text style={{ color: 'lightgrey', textAlign: 'center' }}>
            Salvar
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.resultMsg}>{successMsg}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#a8a8a8',
  },
  header: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cell: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  },
  day: {
    fontWeight: '400',
    fontSize: 22,
    marginBottom: 12,
  },
  resultMsg: {
    marginTop: 20,
    color: '#000033',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
});
