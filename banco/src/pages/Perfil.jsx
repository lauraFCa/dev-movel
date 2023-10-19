import { View, StatusBar, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MotiText } from 'moti';
import { Feather } from '@expo/vector-icons'
import Investimentos from '../components/Investimentos';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Perfil({ route }) {
    const { name } = route.params;

    const dados = {
        Nome: name,
        Email: "email@email.com",
        Profissao: "Estudante",
        PerfilInvestimento: "Conservador",
        Investimentos: [
            {
                Id: 1,
                Empresa: "Bovespa",
                Porcentagem: 4.5
            },
            {
                Id: 2,
                Empresa: "Petrobras",
                Porcentagem: 1
            },
            {
                Id: 3,
                Empresa: "Americanas",
                Porcentagem: 83
            },
            {
                Id: 4,
                Empresa: "Twitter",
                Porcentagem: 15.1
            }
        ]
    }

    return (
        <View>

            <View style={styles.container}>
                <View style={styles.content}>
                    <MotiText style={styles.userName}
                        from={{
                            translateX: -300,
                        }} animate={{
                            translateX: 0,
                        }}
                        transition={{
                            type: 'timing',
                            duration: 1000, //ms
                            delay: 300 //ms
                        }}
                    >
                        {name + "\n"}
                        <Text style={styles.label}>{dados.Email}</Text>
                    </MotiText>

                    <TouchableOpacity activeOpacity={0.9} style={styles.btnUser} onPress={() => { alert("Change photo") }}>
                        <Feather name='user' size={27} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.data}>
                <Text style={ styles.text}>Profissão:
                    <Text style={{ fontWeight: 'normal' }}>{" "+dados.Profissao}</Text>
                </Text>

                <Text style={styles.text }>Perfil de investimento: 
                    <Text style={{ fontWeight: 'normal' }}>{" "+dados.PerfilInvestimento}</Text>
                </Text>

                <Text style={ styles.text}>Investimentos: </Text>

                <FlatList
                    style={styles.list}
                    data={dados.Investimentos}
                    keyExtractor={(item) => String(item.Id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Investimentos props={item} />
                    } />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    text: { 
        fontWeight: 'bold', 
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5,
    },
    container: {
        backgroundColor: '#8000ff',
        flexDirection: 'row',
        paddingTop: statusBarHeight,
        paddingStart: 10,
        paddingEnd: 16,
        paddingBottom: 55,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
    },
    btnUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    },
    data: {
        color: '#dadada',
        padding: 15
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 5,
        marginTop: 5,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})
