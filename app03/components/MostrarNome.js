import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
export default function MostrarNome() {
// Estado para armazenar o valor do TextInput
const [textoInput, setTextoInput] = useState('');
const [nome, setNome] = useState('');
//Escreve o conteúdo na variável nome
const handlePegaNome = () => {
if (textoInput !== '') {
setNome('Bem-vindo: ' + textoInput);
} else {
setNome('');
}
}
return (
<View style={styles.container}>
{/* CAbeçalho*/}
<Header />
{/* Meio da aplicação*/}
<View style={{ flex: 1, backgroundColor: '#fff', justifyContent:
'center' }}>
<Text style={styles.texto}>Sistema do Professor Mário</Text>
<TextInput
style={styles.input}
placeholder="Digite seu nome"
value={textoInput}
onChangeText={(novoTexto) => setTextoInput(novoTexto)}
/>
<Text style={styles.texto}> {nome} </Text>
<Button title="Entrar" onPress={handlePegaNome} />
</View>
{/* Rodapé*/}
<Footer />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1
},
input: {
height: 45,
borderWidth: 1,
borderColor: '#222',
margin: 10,
fontSize: 20,
padding: 10
},
texto: {
textAlign: 'center',
fontSize: 25
}
})