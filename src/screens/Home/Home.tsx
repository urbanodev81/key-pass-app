import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BatLogo } from '../../componentes/BatLogo/BatLogo';
import { BatTextInput } from '../../componentes/BatTextInput/BatTextInput';
import { BatButton } from '../../componentes/BatButton/BatButton';


export default function Home() {
    return (
        <ScrollView>
            <View style={styles.appContainer}>
                <View style={styles.logoContainer}>
                    <BatLogo />
                </View>
                <View style={styles.inputContainer}>
                    <BatButton />
                </View>
                <Text style={styles.texto}></Text>
                <StatusBar style="light" />
            </View> 
        </ScrollView>
    )
}

