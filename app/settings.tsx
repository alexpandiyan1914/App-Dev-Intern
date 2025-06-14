import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>🔔 Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>🌙 Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  settingLabel: { fontSize: 18 },
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});
