import React from 'react';
import { TextInput, Text, View } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputPropos{
  pass:string
}

export function BatTextInput(props : BatTextInputPropos ) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTituloInput}>Sua senha nova aqui:</Text>
      <TextInput style={styles.inputer}  placeholder='Aqui vai aparecer sua senha.' 
          value={props.pass}/>
    </View>
  );
}