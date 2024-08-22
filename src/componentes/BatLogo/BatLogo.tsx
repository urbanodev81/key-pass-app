import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyle';
import batLogo from '../../../assets/key-logo.png'
export function BatLogo() {
  return (
    <>
        <Text style={styles.title  }>
            KEY PASS GEN
        </Text>
        <Image source={batLogo } style={styles.batLogo} />

    </>
  );
}