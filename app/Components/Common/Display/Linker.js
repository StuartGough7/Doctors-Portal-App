import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const Linker = (props) => {
  return (
    <TouchableOpacity onPress={() => props.OnPress()} style={styles.containerStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'justify',
  },
}
