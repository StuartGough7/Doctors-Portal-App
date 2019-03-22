import React from 'react'
import { LinearGradient } from 'app/components/common'
import { Config } from 'app/config'

export const ColorDivider = (props) => {
  return <LinearGradient Color={Config.HeaderColor} styles={styles.containerStyle} />
}

const styles = {
  containerStyle: {
    flex: 0,
    height: 10,
    width: '80%',
    borderRadius: 5,
  },
}
