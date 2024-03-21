import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Comida(props) {
  return (
    <View>
        <Image 
         source={{ uri: props.img}}
         style={{ width: props.largura, height: props.altura}}
         />
        <Text>{props.title}</Text>
    </View>
  );
}