import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Home Page</Text>
  </SafeAreaView>
);

export default HomeScreen;
