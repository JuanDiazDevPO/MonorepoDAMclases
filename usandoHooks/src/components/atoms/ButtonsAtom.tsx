import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'number' | 'operator' | 'action' | 'equal';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const ButtonAtom = ({
  label,
  onPress,
  variant = 'number',
  style,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    minHeight: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 6,
  },
  number: {
    backgroundColor: '#E5E7EB',
  },
  operator: {
    backgroundColor: '#F59E0B',
  },
  action: {
    backgroundColor: '#9CA3AF',
  },
  equal: {
    backgroundColor: '#10B981',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
});

export default ButtonAtom;