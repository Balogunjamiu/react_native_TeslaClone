import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import CarList from './components/carsList';
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.Container}>
      <Header />
      <CarList />
      <StatusBar style="auto" />
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