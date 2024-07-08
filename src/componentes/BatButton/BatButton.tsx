import React, { useState } from 'react';
import {Button, Pressable, Text, View } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
  const [pass, setPass] = useState('');

  function hadleGenerateButton () {
    setPass('ola povo');
  }
  return (
    <View style={styles.container}>
        <BatTextInput pass={pass}  />

        <Pressable style={styles.buttonGerar}
           onPress={hadleGenerateButton}>
          <Text  style={styles.textGerar}>Gerar</Text>
        </Pressable>
        <Pressable style={styles.buttonCopy}
           onPress={() => {console.log('presssionado copy')}}>
          <Text  style={styles.textCopy}>COPY</Text>
        </Pressable>
    </View>
  );
}