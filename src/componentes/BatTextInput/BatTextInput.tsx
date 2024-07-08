import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputPropos{
  pass:string
}

export function BatTextInput(props : BatTextInputPropos ) {
  return (
    <View style={styles.container}>
        <TextInput style={styles.inputer}  placeholder='Digite aqui' 
          value={props.pass}/>
    </View>
  );
}