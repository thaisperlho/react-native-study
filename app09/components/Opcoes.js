import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
const Opcoes = () => {
    const [interests, setInterests] = useState({
        futebol: false,
        cinema: false,
        gastronomia: false,
        informatica: false,
        literatura: false,
        teatro: false,
    });
    const handleCheckBoxToggle = (key) => {
        setInterests((prevInterests) => ({
            ...prevInterests,
            [key]: !prevInterests[key],
        }));
    };
    const displayInterests = () => {
        const selectedInterests = Object.keys(interests).filter(
            (key) => interests[key]
        );
        return selectedInterests.join(', ');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Escolha seus interesses</Text>
            <ScrollView style={styles.checkboxContainer}>
                {Object.keys(interests).map((key) => (
                    <CheckBox key={key} title={key.charAt(0).toUpperCase() + key.slice(1)}
                        checked={interests[key]} onPress={() => handleCheckBoxToggle(key)}
                    />
                ))}
            </ScrollView>
            <Button
                title="Mostrar Interesses Selecionados"
                onPress={() => alert(`Seus interesses: ${displayInterests()}`)}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "black",
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 40,
        color: "white",
    },
    checkboxContainer: {
        width: '100%',
        marginBottom: 20,
    },
});
export default Opcoes;