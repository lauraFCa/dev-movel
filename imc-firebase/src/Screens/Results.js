import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import Storage from '../database/firebaseMethods';

const storage = new Storage();

export default function Results({ navigation }) {
  const [results, setResults] = useState([]);

  const getAllData = async () => {
    let dados = await storage.getAll();
    setResults(dados);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 8,
          color: '#000033',
          borderBottomWidth: 1,
        }}>
        Últimos resultados salvos
      </Text>
      <ScrollView>
        {results.map((item, index) => (
          <View style={styles.eachView}>
            <Text key={index}>{console.log(item)}</Text>
            <View style={styles.container}>
              <Text style={styles.day}>{item.data}</Text>

              <View style={styles.row}>
                <Text style={styles.header}>Altura</Text>
                <Text style={styles.cell}>{item.altura} cm</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.header}>Peso</Text>
                <Text style={styles.cell}>{item.peso} kg</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.header}>IMC</Text>
                <Text style={styles.cell}>{item.imc}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.header}>Resultado</Text>
                <Text style={styles.cell}>{item.resultado}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  eachView: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'lightgrey',
    marginTop: 15,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
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
});
