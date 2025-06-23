import 'expo-dev-client';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const adUnitId = 'ca-app-pub-9940591156853065/7489877080';

export default function HomeScreen() {
  const router = useRouter();
  const today = new Date().toDateString();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>👋 Welcome Back!</Text>
        <Text style={styles.date}>{today}</Text>
        <Text style={styles.time}>{currentTime}</Text>

        <Image
          source={require('../assets/images/user.jpg')}
          style={styles.profilePic}
        />

        <Text style={styles.name}>Alex Pandiyan A</Text>

        <View style={styles.buttonContainer}>
          <Button title="Go to Profile" onPress={() => router.push('/profile')} />
          <View style={{ height: 10 }} />
          <Button title="Go to Settings" onPress={() => router.push('/settings')} />
        </View>
      </View>

      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          networkExtras: {
            collapsible: 'bottom',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    paddingVertical: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  date: { fontSize: 16, color: '#555', marginBottom: 5 },
  time: { fontSize: 16, color: '#555', marginBottom: 20 },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 20, fontWeight: '600', marginBottom: 30 },
  buttonContainer: { width: '60%' },
});
