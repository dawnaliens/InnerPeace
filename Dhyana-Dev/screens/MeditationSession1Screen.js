import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {video} from 'expo-av'

const MeditationSession1Screen = () => {
  const video = React.useRef(null)
  const secondVideo = React.useRef(null)
  

  return (
    <View>
      <Text>MeditationSession1Screen</Text>
    </View>
  )
}

export default MeditationSession1Screen

const styles = StyleSheet.create({})