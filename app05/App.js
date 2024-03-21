import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
// Importando os estilos
//import styles from './styles';
export default function App() {
    const Header = () => {
        return (
            <View style={styles.header}>
                <Text> Header App </Text>
            </View>
        );
    }
    const Boxes = () => {
        return (
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text> Box 1 </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text> Box 2 </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text> Box 3 </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text> Box 4 </Text>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Boxes />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxContainer: {
        width: '100%',
        height: '85%',
        //backgroundColor: 'red',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5,
        //backgroundColor: 'gree',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    inner: {
        flex: 1,
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center'
    }
})