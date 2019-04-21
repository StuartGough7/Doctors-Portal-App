import React, { useState } from 'react'
import { View, ActivityIndicator, Dimensions, YellowBox, Alert } from 'react-native'
import { WebView } from 'react-native-webview'
import { Header } from 'app/components/common'
import { navigate } from 'app/services/navigation'
const { height, width } = Dimensions.get('window')

YellowBox.ignoreWarnings(['Encountered'])

export const WebViewer = () => {
  const [LoadingVisible, SetLoadingVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Header headerText={'Portal Online'} />

      {LoadingVisible && (
        <View style={styles.LoadingScreen}>
          <ActivityIndicator
            animating={LoadingVisible}
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        </View>
      )}
      <WebView
        onLoad={() => SetLoadingVisible(false)}
        source={{ uri: 'https://www.doctorsportal.co.za/' }}
        style={styles.WebView}
        onLoadStart={() => SetLoadingVisible(true)}
        onError={(err) => {
          if (err) {
            Alert.alert(
              'Connection Error',
              'Connection Error',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: false }
            )
            navigate('HomeScreen', null)
          }
        }}
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
    color: '#fff',
    position: 'absolute',
    top: height / 2 - 100,
    left: width / 2 - 10,
  },
  WebView: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    backgroundColor: '#240F48',
  },
}
