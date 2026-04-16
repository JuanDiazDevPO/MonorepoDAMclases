import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CalculatorOrganism from '../components/organisms/CalculatorOrganism';

const CalculateScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <CalculatorOrganism />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
    textAlign: 'center',
  },
});

export default CalculateScreen;