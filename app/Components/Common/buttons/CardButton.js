/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'app/components/common'
import { Config } from 'app/config'

export const CardButton = React.memo((props) => {
  return (
    <View style={styles.ShadowWrapper}>
      <TouchableOpacity onPress={() => props.OnPress()} style={[styles.buttonStyle, props.styles]}>
        <LinearGradient Color={Config.HeaderColor} styles={{ justifyContent: 'center' }}>
          <Text style={styles.textStyle}>{props.Text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
})

const styles = {
  ShadowWrapper: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle: {
    height: 70,
    width: 120,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
}
