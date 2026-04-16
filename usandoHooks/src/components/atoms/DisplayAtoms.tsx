import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  expression: string;
  result: string;
};

const DisplayAtom = ({expression, result}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.expression} numberOfLines={1}>
        {expression || '0'}
      </Text>
      <Text style={styles.result} numberOfLines={1}>
        {result || '0'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    minHeight: 120,
    justifyContent: 'flex-end',
  },
  expression: {
    color: '#9CA3AF',
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 8,
  },
  result: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'right',
  },
});

export default DisplayAtom;