import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import SettingsHeroSection from '../Components/SettingsHeroSection';
import SettingsSecondSection from '../Components/SettingsSecondSection';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff',
        },
      ]}
    >
      <SettingsHeroSection
        isDarkMode={isDarkMode}
      />
      <SettingsSecondSection
        textInfo="Language"
        isDarkMode={isDarkMode}
      />
      <SettingsSecondSection
        textInfo="My Profile"
        isDarkMode={isDarkMode}
      />
      <SettingsSecondSection
        textInfo="Contact Us"
        isDarkMode={isDarkMode}
      />
      <SettingsSecondSection
        textInfo="Change Password"
        isDarkMode={isDarkMode}
      />
      <SettingsSecondSection
        textInfo="Privacy Policy"
        isDarkMode={isDarkMode}
      />

      <View
        style={[
          styles.secondContainer,
          {
            backgroundColor: isDarkMode ? '#1c1c1e' : '#ffffff',
          },
        ]}
      >
        <Text
          style={{
            fontSize: 27,
            color: isDarkMode ? '#ffffff' : '#000000',
          }}
        >
          Theme
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '6%',
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});