import React from 'react';
import { View, Image } from 'react-native';
export default function Header() {
return (
<View style={{ height: 65, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
<Image
source={require('../src/assets/bandeira.png')}
style={{ width: 100, height: 65 }}
/>
</View>
);
}