/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'app/components/common'
import { Config } from 'app/config'

export const StandardButton = (props) => {
  return (
    <View style={styles.ShadowWrapper}>
      <TouchableOpacity onPress={() => props.OnPress()} style={styles.buttonStyle}>
        <LinearGradient Color={Config.HeaderColor} styles={{ justifyContent: 'center' }}>
          <Text style={styles.textStyle}>{props.Text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  ShadowWrapper: {
    alignSelf: 'center',
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
    height: 50,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
}
