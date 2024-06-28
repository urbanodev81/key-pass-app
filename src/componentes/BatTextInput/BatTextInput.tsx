import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {
  return (
    <View >
        <TextInput style={styles.inputer} />
    </View>
  );
}