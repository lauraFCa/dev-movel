import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function Marker({ icon, value }) {
    return (
        <View style={st.container}>
            <Icon name={icon} color="#3498db" size={25} />
            <Text>{value}ml</Text>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        textAlign: 'center',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})