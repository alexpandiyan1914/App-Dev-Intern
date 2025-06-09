import { AdMobBanner } from 'expo-ads-admob';
import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const today = new Date().toDateString();
  // const currentTime = new Date().toLocaleTimeString();

  return (
      <View style={styles.container}>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-9940591156853065/2655061804"
          servePersonalizedAds={true}
        />
        <Text style={styles.title}>👋 Welcome Back!</Text>
        <Text style={styles.date}>{today}</Text>
        {/* <Text style={styles.time}>{currentTime}</Text> */}

        <Image
          source={require('../assets/images/user.jpg')}
          style={styles.profilePic}
        />

        <Text style={styles.name}>Alex Pandiyan</Text>

        <View style={styles.buttonContainer}>
          <Button title="Go to Profile" onPress={() => router.push('/profile')} />
          <View style={{ height: 10 }} />
          <Button title="Go to Settings" onPress={() => alert("Coming soon! ⚙️")} />
        </View>       
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fefefe' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  date: { fontSize: 16, color: '#555', marginBottom: 20 },
  time: { fontSize: 16, color: '#555', marginBottom: 20 },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: '600', marginBottom: 30 },
  buttonContainer: { width: '60%' },
});
