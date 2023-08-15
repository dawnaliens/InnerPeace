import { StyleSheet, View,Button } from 'react-native'
import React from 'react'
import {Video} from 'expo-av'

const Session3Screen = () => {
  const video = React.useRef(null);
//   const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
//   const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  return (
    <View style={styles.container}>
       <Video
        ref={video}
        style={styles.video}
        source={require('../assets/water2.mp4')}
        useNativeControls
        resizeMode="cover"
        isLooping={true}
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button title="Play" onPress={() => video.current.playFromPositionAsync(5000)} />
        <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
      </View>
    </View>
  )
}

export default Session3Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
});