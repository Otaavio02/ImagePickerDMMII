import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


export default function Loading({size}) {
  // const animation = useRef<LottieView>(null);
  return (
    <View style={{height: size, aspectRatio: 1}}>
      <LottieView style={{flex: 1}}
      // ref={animation} 
        source={require('../assets/images/loading.json')} autoPlay loop />
    </View>
  )
}