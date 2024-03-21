import React from 'react';
import { View, Image } from 'react-native';
export default function Header() {
return (
<View style={{ height: 65, backgroundColor: '#222', justifyContent: 'space-between', flexDirection: 'row' }}>
<Image
source={require('../src/assets/like.png')}
style={{ width: 30, height: 30 }}
resizeMode="contain"
/>
<Image
source={require('../src/assets/logo.png')}
style={{ width: 110, height: 30 }}
resizeMode="contain"
/>
<Image
source={require('../src/assets/send.png')}
style={{ width: 30, height: 30 }}
resizeMode="contain"
/>
</View>
);
}