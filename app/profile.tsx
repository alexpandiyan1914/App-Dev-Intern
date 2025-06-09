import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/user.jpg')}
        style={styles.image}
      />


      <Text style={styles.name}>Alex Pandiyan</Text>
      <Text style={styles.role}>App Developer Intern</Text>
      <Text style={styles.bio}>
        Passionate about mobile UI, React Native, and building cool stuff. Exploring Expo & modern app development!
      </Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text>• React Native</Text>
      <Text>• TypeScript</Text>
      <Text>• Firebase (basic)</Text>
    </View>
  );
}

export default index;


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  role: { fontSize: 16, color: '#666', marginBottom: 12 },
  bio: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 10, marginBottom: 6 },
});
