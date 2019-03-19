import React from 'react'
import { Text } from 'react-native'

export const TextHeading = (props) => {
  return <Text style={styles.textStyle}>{props.Text}</Text>
}

const styles = {
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '10%',
  },
}
