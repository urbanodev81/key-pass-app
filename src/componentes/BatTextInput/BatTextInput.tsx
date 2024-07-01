import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {
  return (
    <View style={styles.container}>
        <TextInput style={styles.inputer}  placeholder='Digite aqui' />
    </View>
  );
}