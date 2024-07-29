import React, { useState } from 'react';
import {Pressable, Text, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/password.Service';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton () {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopuButtoon(){
    Clipboard.setStringAsync(pass);

  }
  return (
    <View style={styles.container}>
        <BatTextInput pass={pass}  />

        <Pressable style={styles.buttonGerar}
           onPress={handleGenerateButton}>
          <Text  style={styles.textGerar}>Gerar</Text>
        </Pressable>
        <Pressable style={styles.buttonCopy}
           onPress={handleCopuButtoon}>
          <Text  style={styles.textCopy}>COPY</Text>
        </Pressable>
    </View>
  );
}