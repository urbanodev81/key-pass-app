import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BatLogo } from '../../componentes/BatLogo/BatLogo';
import { BatTextInput } from '../../componentes/BatTextInput/BatTextInput';


export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <BatTextInput />
            </View>
            <Text style={styles.texto}>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="light" />
        </View> 
    )
}

