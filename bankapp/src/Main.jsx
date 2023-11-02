import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Home from './pages/Home';


export default function Main() {
    return (
        <View style={styles.main}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        
    }
})