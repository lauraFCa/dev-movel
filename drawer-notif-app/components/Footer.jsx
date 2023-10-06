import { View, Pressable, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default function Footer({navigation}) {
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Pressable
                onPress={() => navigation.openDrawer()}
                style={{ padding: 5, marginBottom: 10, marginTop: 5 }}>
                <Icon name='menu' color="#3498db" size={40} />
            </Pressable>
        </View>
    )
}