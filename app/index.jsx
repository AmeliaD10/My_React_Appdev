import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Counter from './counter';
import Calculator from './calculator';

const Home = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/045/851/551/small_2x/pink-sky-with-clouds-background-timelapse-of-pink-sky-with-cloud-free-video.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Pearl Gene Ivan C. Petallo</Text>
        <Text style={styles.header}>My React Native</Text>
        <View style={styles.section}>
          <Counter />
        </View>
        <View style={styles.section}>
          <Calculator />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 154, 162, 0.5)', // Soft pink with transparency 
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,  
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    alignSelf: 'center',  
    overflow: 'hidden',  
    marginBottom: 10,
  },
  
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // More transparency
    padding: 25,
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
    width: '90%',
    maxWidth: 350,
    alignItems: 'center',
    backdropFilter: 'blur(10px)', // Glassmorphism effect (for web, not mobile)
  },
  
});

export default Home;
