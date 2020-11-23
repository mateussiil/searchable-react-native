import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchableList from './src/SearchableList';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SearchableList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
