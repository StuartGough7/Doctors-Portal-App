import React, { useState } from 'react'
import { View, ActivityIndicator, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { Header } from 'app/components/common'
const { height, width } = Dimensions.get('window')
export const WebViewer = () => {
  const [LoadingVisible, SetLoadingVisible] = useState(true)

  return (
    <View style={styles.container}>
      <Header headerText={'Portal Online'} />

      {LoadingVisible && (
        <View style={styles.LoadingScreen}>
          <ActivityIndicator size="large" style={styles.ActivityIndicatorStyle} />
        </View>
      )}
      <WebView
        onLoad={() => SetLoadingVisible(false)}
        source={{ uri: 'http://www.doctorsportal.co.za/' }}
        style={styles.WebView}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#240F48',
  },
  LoadingScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#240F48',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    top: height / 2 - 100,
    left: width / 2 - 10,
  },
  WebView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#240F48',
  },
}
