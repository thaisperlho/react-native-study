import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Comida from './components/Comida';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {

    const [nome, setNome] = useState('Tacacá');
    const [infomacao, setInformacao] = useState('');
    const [nome2, setNome2] = useState('Vatapá');
    const [infomacao2, setInformacao2] = useState('');
    const [nome3, setNome3] = useState('Pato no tucupi');
    const [infomacao3, setInformacao3] = useState('');

    let img = 'https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-tacaca.avif';
    let img2 = 'https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-vatapa.avif'
    let img3 = 'https://s2-g1.glbimg.com/woXT1EpOm1XSiIvOk8tNcE7S-qo=/0x0:2000x1342/1000x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2013/08/29/11041_1.jpg'

    const handleMudarNome = () => {
        setNome('Eu vou tomar um tacacá!');
        setInformacao('O tacacá é uma comida típica da região norte do Brasil, muito consumida no estado do Pará. É uma sopa indígena, feita com tucupi, goma de mandioca, jambu e camarão.');
    }
    const handleMudarNome2 = () => {
        setNome2('Eu vou tomar um vatapá!');
        setInformacao2('A receita de vatapá é com certeza uma das receitas mais modificadas ao longo da sua história, de acordo com cada região onde é feito.');
    }
    const handleMudarNome3 = () => {
        setNome3('Eu vou comer um pato no tucupi!');
        setInformacao3('Prato típico do cardápio paraense, leva dois dos ingredientes mais tradicionais do estado, o tucupi e o jambu.');
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text style={{ color: 'black', fontSize: 25, margin: 15, textAlign: 'center' }}>Comida Típica Paraense</Text>
            <View style={{
                flex: 1, backgroundColor: '#fff', justifyContent:
                    'center', alignItems: 'center'
            }}>
                <Comida
                    img={img}
                    largura={300}
                    altura={60}
                />
                <Text style={{ fontSize: 15 }}> {nome} </Text>
                <Text style={{ fontSize: 10, textAlign: 'center', margin: 5 }}> {infomacao} </Text>
                <Button title="Exibir mais" onPress={handleMudarNome} />
            </View>
            <View style={{
                flex: 1, backgroundColor: '#fff', justifyContent:
                    'center', alignItems: 'center'
            }}>
                <Comida
                    img={img2}
                    largura={300}
                    altura={60}
                />
                <Text style={{ fontSize: 15 }}> {nome2} </Text>
                <Text style={{ fontSize: 10, textAlign: 'center', margin: 5 }}> {infomacao2} </Text>
                <Button title="Exibir mais" onPress={handleMudarNome2} />
                <StatusBar style="auto" />
            </View>
            <View style={{
                flex: 1, backgroundColor: '#fff', justifyContent:
                    'center', alignItems: 'center'
            }}>
                <Comida
                    img={img3}
                    largura={300}
                    altura={60}
                />
                <Text style={{ fontSize: 15 }}> {nome3} </Text>
                <Text style={{ fontSize: 10, textAlign: 'center', margin: 5 }}> {infomacao3} </Text>
                <Button title="Exibir mais" onPress={handleMudarNome3} />
                <StatusBar style="auto" />
            </View>
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texto: {
        textAlign: 'center',
        fontSize: 25
    },
    button: {
        backgroundColor: 'red',
    }
});