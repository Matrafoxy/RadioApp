import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AboutScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>About Page</Text>
  </SafeAreaView>
);

export default AboutScreen;
