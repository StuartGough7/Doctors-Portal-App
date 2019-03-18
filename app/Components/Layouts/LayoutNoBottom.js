/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView, View } from 'react-native'
// import NavigationService from 'App/Services/NavigationService'
import { Header } from 'app/components/common'

export const LayoutNoBottom = (props, { navigation }) => {
  return (
    <View style={styles.Background}>
      <Header headerText={'Doctors Portal'} />
      <View style={styles.container}>
        <View style={styles.TopSection}>{props.TopContent}</View>
        <View style={styles.MiddleSection}>{props.MidContent}</View>
        <View style={styles.BottomSection}>{props.BotContent}</View>
      </View>
    </View>
  )
}

const styles = {
  Background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#240F48',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  TopSection: {
    height: '20%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MiddleSection: {
    height: '40%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BottomSection: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
