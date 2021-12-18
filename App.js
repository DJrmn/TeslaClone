import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
import CarItem from './components/Caritem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={"Model 3"} 
        tagline={"Order online for"}
        taglineCTA = {"Touchless Deivery"} 
        image={require('./assets/images/Model3.jpeg')}
      />  
    

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
