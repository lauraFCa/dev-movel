import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Meta Diária de Água:</Text>
            <TextInput placeholder="Insira sua meta aqui" />
            <Button title="Iniciar" onPress={() => navigation.navigate('Settings')} />
        </View>
    );
}

export default HomeScreen;
