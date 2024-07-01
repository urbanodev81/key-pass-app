import React from 'react';
import {Button, Pressable, Text, View } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Pressable style={styles.buttonGerar}
           onPress={() => {console.log('presssionado gerar')}}>
          <Text  style={styles.textGerar}>Gerar</Text>
        </Pressable>
        <Pressable style={styles.buttonCopy}
           onPress={() => {console.log('presssionado copy')}}>
          <Text  style={styles.textCopy}>COPY</Text>
        </Pressable>
    </View>
  );
}