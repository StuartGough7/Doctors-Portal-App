import React from 'react'
import { Config } from 'app/config'
import { default as DefaultLinearGradient } from 'react-native-linear-gradient'

const withDefaultValues = (Component) => {
  return (props) => (
    <Component
      start={props.start || { x: 0, y: 1 }}
      end={props.end || { x: 1, y: 0 }}
      colors={props.Color || (props.index ? Config.PageColors[props.index] : Config.PageColors[0])}
      style={[styles.linearGradient, props.styles]}
      {...props}
    />
  )
}

const styles = {
  linearGradient: {
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex: 10,
  },
}

export const LinearGradient = withDefaultValues(DefaultLinearGradient)
