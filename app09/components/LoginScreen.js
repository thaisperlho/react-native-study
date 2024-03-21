import React, { useState } from 'react';
import {
    View, Text, KeyboardAvoidingView,
    Image, TextInput, TouchableOpacity,
} from 'react-native';
import css from './styles';
const LoginScreen = ({ navigation }) => {
    const [display, setDisplay] = useState('none');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (username === 'mario' && password === 'baigon') {
            // Se os dados estiverem corretos, navegue para a próxima tela
            navigation.navigate('Opcoes');
        } else {
            // Caso contrário, exiba uma mensagem que está escondida
            // é o css login__msg que mostra o texto!
            setDisplay('');
        }
    };
    return (
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View >
                <Image
                    source={require('../assets/raio.png')}
                    style={{ width: 110, height: 100, marginBottom: 20 }}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha
                    inválidos!</Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:'
                    onChangeText={(text) => setUsername(text)} />
                <TextInput style={css.login__input} placeholder='Senha:'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity style={css.login__button} onPress={handleLogin}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
export default LoginScreen;