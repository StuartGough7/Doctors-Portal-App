/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { LinearGradient } from 'app/components/common'
import { Config } from 'app/config'
import { Images } from 'app/theme/Images'
import { navigate } from 'app/services/navigation'

export const Header = (props) => {
  return (
    <View style={styles.HeaderStyle}>
      <StatusBar hidden />
      <View style={styles.ShadowWrapper}>
        <View style={styles.NavStyle}>
          <LinearGradient Color={Config.HeaderColor} styles={{ flexDirection: 'row' }}>
            <View style={styles.MidStyle}>
              <TouchableOpacity
                onPress={() => navigate('HomeScreen', null)}
                style={styles.WhiteCircle}
              >
                <Image style={styles.Icons} source={Images.Logo} />
              </TouchableOpacity>
              <Text style={styles.textStyle}>{props.headerText}</Text>
            </View>
            <View style={styles.RightCornerStyle} />
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

const styles = {
  HeaderStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    elevation: 20,
    paddingBottom: 10,
  },
  ShadowWrapper: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  NavStyle: {
    flex: 1,
    flexDirection: 'row',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  MidStyle: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  RightCornerStyle: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  LeftIcon: {
    backgroundColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 20,
  },
  WhiteCircle: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  Icons: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
}
