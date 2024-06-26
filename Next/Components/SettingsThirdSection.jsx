import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';

const SettingsThirdSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff' }]}>
      <Text style={{ fontSize: 27, color: isDarkMode ? '#ffffff' : '#000000' }}>Theme</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />
    </View>
  );
};

export default SettingsThirdSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});