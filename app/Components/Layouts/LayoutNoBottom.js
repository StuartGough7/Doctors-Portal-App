/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView, View, Platform } from 'react-native'
// import NavigationService from 'App/Services/NavigationService'
import { Header } from 'app/components/common'

export const LayoutNoBottom = (props, { navigation }) => {
  return (
    <View style={styles.Background}>
      <Header
        headerText={"Doctors Portal"}
      />
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
    backgroundColor: '#240F48',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  TopSection: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleSection: {
    flexDirection: 'row',
    flex: 0.6,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomSection: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
