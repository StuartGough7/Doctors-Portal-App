import React from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { Header } from 'app/components/common'

export const LayoutNoBottom = (props, { navigation }) => {
  return (
    <View style={styles.Background}>
      <Header headerText={'Doctors Portal'} />
      <ScrollView style={styles.container}>
        <View style={styles.TopSection}>{props.TopContent}</View>
        <View style={styles.MiddleSection}>{props.MidContent}</View>
        <View style={styles.BottomSection}>{props.BotContent}</View>
      </ScrollView>
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
    height: 0.2 * Dimensions.get('window').height,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MiddleSection: {
    height: 0.3 * Dimensions.get('window').height,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BottomSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
