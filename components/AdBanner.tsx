// components/AdBanner.tsx
import { View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

export default function AdBanner() {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // ✅ test banner ad ID
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={(error) => console.warn(error)}
      />
    </View>
  );
}
