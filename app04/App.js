import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// Importando os estilos
import styles from './styles';
export default function App() {
    const [textoFrase, setTextoFrase] = useState('');
    const [img, setImg] = useState(require('./assets/biscoito.png'));
    const frases = [
        'A paciência é a chave que abre todas as portas da sabedoria.',
        'Acredite no poder dos seus sonhos, pois são eles que moldam o seu destino.',
        'A felicidade está nas pequenas coisas; não deixe de apreciá-las.',
        'Seja como o bambu, flexível diante dos desafios, mas sempre enraizado na sua verdade.',
        'A gentileza é a linguagem que todos entendem; fale-a com frequência.',
        'Em meio às tempestades, encontre a força para dançar na chuva.',
        'Siga o fluxo da vida, pois muitas vezes é nas curvas que encontramos os maiores tesouros.',
        'O otimismo é a chama que ilumina o caminho até os dias mais sombrios.',
        'A verdadeira riqueza está no coração generoso e no sorriso sincero.',
        'Cada novo dia é uma página em branco; escreva uma história que valha a pena ser lida.'
    ];
    const quebraBiscoito = () => {
        const numeroAleatorio = Math.floor(Math.random() * frases.length);
        setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
        setImg(require('./assets/biscoitoAberto.png'));
    };
    return (
        <View style={styles.container}>
            <Image
                source={img}
                style={styles.img}
            />
            <Text style={styles.textoFrase}>{textoFrase}</Text>
            <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}