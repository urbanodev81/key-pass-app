import React, { useState } from 'react';
import {TextInput , Pressable, Text, View,  Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/password.Service';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [length, setLength] = useState('');  // Default length
  const [type, setType] = useState<'text' | 'number' | 'mixed'>('mixed');  // Default type
  const [errorMessage, setErrorMessage] = useState('');

  function handleGenerateButton () {
    const numLength = parseInt(length);
    if (isNaN(numLength) || numLength < 6 || numLength > 12) {
      Alert.alert('Invalid Length', 'Length must be between 6 and 12');
      return;
    }
    setErrorMessage('');
    let generateToken = generatePass(numLength, type);
    setPass(generateToken);

    
  }

  function handleCopuButtoon(){
    Clipboard.setStringAsync(pass);

  }

  function handleLengthChange(text: string) {
    setLength(text);
    const num = parseInt(text);
    if (!isNaN(num) && num >= 6 && num <= 12) {
      setErrorMessage('');
    } else {
      setErrorMessage('Length must be between 6 and 12');
    }
  }

  return (
    <View style={styles.container}>
      <BatTextInput pass={pass}  />

      <Text style={styles.textTituloInput}>Choose type:</Text>
      <RadioButton.Group onValueChange={value => setType(value as 'text' | 'number' | 'mixed')} value={type}>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Text</Text>
          <RadioButton value="text" />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Number</Text>
          <RadioButton value="number" />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Mixed</Text>
          <RadioButton value="mixed" />
        </View>
      </RadioButton.Group>

      <Text style={styles.textTituloInput}>Enter length (min 6):</Text>
      <TextInput
        style={styles.inputTextNum}
        keyboardType="numeric"
        value={length.toString()}
         onChangeText={handleLengthChange}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

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