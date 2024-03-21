import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
},
img: {
width: 250,
height: 250,
},
textoFrase: {
fontSize: 20,
color: '#dd7b22',
margin: 30,
fontStyle: 'italic',
textAlign: 'center'
},
botao: {
width: 230,
height: 50,
borderWidth: 2,
borderColor: '#dd7b22',
borderRadius: 25
},
btnArea: {
flex: 1,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center'
},
btnTexto: {
fontSize: 18,
fontWeight: 'bold',
color: '#dd7b22'
}
});
export default styles;