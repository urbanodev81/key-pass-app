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
    if(isNaN(numLength)) {
      setErrorMessage('Escolha o tamanho da senha, de 6 a 12 caracteres');
      return;
    
    } else if(numLength < 6 || numLength > 12) {
      setErrorMessage('Tamanho da senha deve ser de 6 e 12 caracteres');
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
    } else if (isNaN(num)) {
      setErrorMessage('Escolha o tamanho da senha, de 6 a 12 caracteres');
    
    } else if(num <= 6 || num > 12) {
      setErrorMessage('Tamanho da senha deve ser de 6 e 12 caracteres');
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.textTituloInput}>Escolha o tipo:</Text>
      <RadioButton.Group onValueChange={value => setType(value as 'text' | 'number' | 'mixed')} value={type}>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Texto</Text>
          <RadioButton value="text" />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Número</Text>
          <RadioButton value="number" />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.textRadioOption}>Misturar</Text>
          <RadioButton value="mixed" />
        </View>
      </RadioButton.Group>

      <Text style={styles.textTituloInput}>Tamanho da senha (min 6 - max 12):</Text>
      <TextInput
        style={styles.inputTextNum}
        keyboardType="numeric"
        value={length.toString()}
         onChangeText={handleLengthChange}
         placeholder='Digite o tamanho da senha que precisa.  (min 6 - max 12)'
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <BatTextInput pass={pass}  />

      <Pressable style={styles.buttonGerar}
          onPress={handleGenerateButton}>
        <Text  style={styles.textGerar}>Gerar</Text>
      </Pressable>
      <Pressable style={styles.buttonCopy}
          onPress={handleCopuButtoon}>
        <Text  style={styles.textCopy}>COPIAR</Text>
      </Pressable>
    </View>
  );
}