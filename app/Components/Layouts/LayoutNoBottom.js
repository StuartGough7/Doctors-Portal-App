/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView, View } from 'react-native'
// import NavigationService from 'App/Services/NavigationService'
import { Header } from 'app/components/common'

export const LayoutNoBottom = (props, { navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <LinearGradient index={1}> */}
        <Header
          headerText={"Doctors Portal"}
        />
        <View style={styles.container}>
          <View style={styles.TopSection}>
            <View style={styles.SideLeft}>
              <View style={styles.SideLTop}>
                <ScrollView
                  contentContainerStyle={{ alignItems: 'center' }}
                  style={styles.ScrollLeft}
                >
                  {props.SideLTopContent}
                </ScrollView>
              </View>
              <View style={styles.SideLBottom}>{props.SideLBottomContent}</View>
            </View>
            <View style={styles.MiddleSection}>{props.MidContent}</View>
            <View style={styles.SideRight}>
              <View style={styles.SideRTop}>{props.SideRTopContent}</View>
              <View style={styles.SideRBottom}>{props.SideRBottomContent}</View>
            </View>
          </View>
        </View>
      {/* </LinearGradient> */}
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  TopSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SideLeft: {
    flex: 0.1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SideLTop: {
    height: '70%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SideLBottom: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleSection: {
    flexDirection: 'row',
    flex: 0.8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SideRight: {
    flex: 0.1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  SideRTop: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  SideRBottom: {
    flex: 0.3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
