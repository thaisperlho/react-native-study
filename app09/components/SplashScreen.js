// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simule um tempo de carregamento
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
        }}>
            <Image
                source={require('../assets/raio.png')}
                style={{ width: 110, height: 100, marginBottom: 20 }}
                resizeMode="contain"
            />
            <Text style={{
                color: "white", fontSize: 40, fontFamily: 'Brush Script MT',
                fontWeight: 'bold', fontStyle: 'italic'
            }}>Tela do Mário</Text>
        </View>
    );
};
export default SplashScreen;