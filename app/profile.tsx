import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AdEventType, InterstitialAd } from 'react-native-google-mobile-ads';

const adUnitId = 'ca-app-pub-9940591156853065/2655061804';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

export default function ProfileScreen() {
  const router = useRouter();
   const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      interstitial.show();
    });

    const unsubscribeOpened = interstitial.addAdEventListener(AdEventType.OPENED, () => {
      if (Platform.OS === 'ios') {
        // Prevent the close button from being unreachable by hiding the status bar on iOS
        StatusBar.setHidden(true);
      }
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      if (Platform.OS === 'ios') {
        StatusBar.setHidden(false);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeOpened();
      unsubscribeClosed();
    };
  }, []);

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
      <Text>• C/C++</Text>
      <Text>• Java</Text>
      <Text>• HTML / CSS / JS</Text>

      <View style={styles.buttonContainer}>
        <Button title="Back to Index" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  role: { fontSize: 16, color: '#666', marginBottom: 12 },
  bio: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 10, marginBottom: 6 },
  buttonContainer: { width: '60%',marginTop:20 },
});
