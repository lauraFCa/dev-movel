import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Login from './src/pages/Login'
import AddContent from './src/pages/AddContent'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddContent />
      <Login fisrtBtnText="Login" secondBtnText="Sair"></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
