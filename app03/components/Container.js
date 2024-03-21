import { View } from 'react-native'
import React from 'react'

export default function Container(props) {
  return (
    <View style={{flex: props.valor, backgroundColor: props.cor}}/>
  )
}