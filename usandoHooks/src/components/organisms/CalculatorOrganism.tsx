import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import DisplayAtom from '../atoms/DisplayAtom';
import KeypadRowMolecule from '../molecules/KeypadRowMolecule';

const operators = ['+', '-', '×', '÷'];

const CalculatorOrganism = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState('0');
  const [shouldResetScreen, setShouldResetScreen] = useState(false);

  const expression = useMemo(() => {
    if (previousValue && operator) {
      return `${previousValue} ${operator} ${currentValue}`;
    }
    return currentValue;
  }, [previousValue, operator, currentValue]);

  useEffect(() => {
    setResult(currentValue);
  }, [currentValue]);

  const handleNumberPress = (value: string) => {
    if (shouldResetScreen) {
      setCurrentValue(value);
      setShouldResetScreen(false);
      return;
    }

    if (currentValue === '0') {
      setCurrentValue(value);
      return;
    }

    setCurrentValue(prev => prev + value);
  };

  const handleDecimalPress = () => {
    if (shouldResetScreen) {
      setCurrentValue('0.');
      setShouldResetScreen(false);
      return;
    }

    if (!currentValue.includes('.')) {
      setCurrentValue(prev => prev + '.');
    }
  };

  const handleOperatorPress = (nextOperator: string) => {
    if (previousValue && operator && !shouldResetScreen) {
      handleEqualPress();
      setOperator(nextOperator);
      return;
    }

    setPreviousValue(currentValue);
    setOperator(nextOperator);
    setShouldResetScreen(true);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
    setResult('0');
    setShouldResetScreen(false);
  };

  const calculate = (first: number, second: number, selectedOperator: string) => {
    switch (selectedOperator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '×':
        return first * second;
      case '÷':
        if (second === 0) {
          Alert.alert('Error', 'No se puede dividir entre cero');
          return first;
        }
        return first / second;
      default:
        return second;
    }
  };

  const handleEqualPress = () => {
    if (!previousValue || !operator) {
      return;
    }

    const first = parseFloat(previousValue);
    const second = parseFloat(currentValue);
    const calculation = calculate(first, second, operator);
    const formatted = Number.isInteger(calculation)
      ? calculation.toString()
      : calculation.toFixed(2).replace(/\.?0+$/, '');

    setCurrentValue(formatted);
    setPreviousValue(null);
    setOperator(null);
    setResult(formatted);
    setShouldResetScreen(true);
  };

  const rows = [
    [
      {label: 'C', onPress: handleClear, variant: 'action' as const},
      {label: '÷', onPress: () => handleOperatorPress('÷'), variant: 'operator' as const},
    ],
    [
      {label: '7', onPress: () => handleNumberPress('7')},
      {label: '8', onPress: () => handleNumberPress('8')},
      {label: '9', onPress: () => handleNumberPress('9')},
      {label: '×', onPress: () => handleOperatorPress('×'), variant: 'operator' as const},
    ],
    [
      {label: '4', onPress: () => handleNumberPress('4')},
      {label: '5', onPress: () => handleNumberPress('5')},
      {label: '6', onPress: () => handleNumberPress('6')},
      {label: '-', onPress: () => handleOperatorPress('-'), variant: 'operator' as const},
    ],
    [
      {label: '1', onPress: () => handleNumberPress('1')},
      {label: '2', onPress: () => handleNumberPress('2')},
      {label: '3', onPress: () => handleNumberPress('3')},
      {label: '+', onPress: () => handleOperatorPress('+'), variant: 'operator' as const},
    ],
    [
      {label: '0', onPress: () => handleNumberPress('0')},
      {label: '.', onPress: handleDecimalPress},
      {label: '=', onPress: handleEqualPress, variant: 'equal' as const},
    ],
  ];

  return (
    <View style={styles.container}>
      <DisplayAtom expression={expression} result={result} />
      {rows.map((row, index) => (
        <KeypadRowMolecule key={index} buttons={row} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CalculatorOrganism;