import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';

type ButtonItem = {
  label: string;
  onPress: () => void;
  variant?: 'number' | 'operator' | 'action' | 'equal';
};

type Props = {
  buttons: ButtonItem[];
};

const KeypadRowMolecule = ({buttons}: Props) => {
  return (
    <View style={styles.row}>
      {buttons.map(button => (
        <ButtonAtom
          key={button.label}
          label={button.label}
          onPress={button.onPress}
          variant={button.variant}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
});

export default KeypadRowMolecule;