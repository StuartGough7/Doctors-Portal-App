import React from 'react'
import { Text } from 'react-native'

export const TextHeading = (props) => {
  return <Text style={styles.textStyle}>{props.Text}</Text>
}

const styles = {
  textStyle: {
    color: 'rgb(206,92,99)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
}
