import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
const image = require('./assets/bg.png');

const { width, height } = Dimensions.get('window');


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/> 
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
  image: {
    width: width, // Set your desired width
    height: height, // Set your desired height
    resizeMode: 'contain', // Adjust the image's size to fit the container
  },
});
