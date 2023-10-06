import { StyleSheet, Text } from 'react-native';

export default function PageHeader({ title }) {
    return (
        <Text style={styles.header}>{title}</Text>
    )
}

const styles = StyleSheet.create({

    header: {
        marginTop: 40,
        width: '100%',
        backgroundColor: '#c5c5c5',
        textAlign: 'center',
        padding: 10
    },
})