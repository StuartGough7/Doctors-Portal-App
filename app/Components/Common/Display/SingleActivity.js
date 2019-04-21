import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const SingleActivity = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.Edit()}>
      <View style={styles.Section1}>
        <Text style={styles.textStyle}>{props.date}</Text>
      </View>
      <View style={styles.Section2}>
        <Text style={styles.textStyle}>{props.details ? props.details.title : 'No Title'}</Text>
      </View>
      <View style={styles.Section3} />
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#fff',
  },
  Section1: {
    flex: 0.2,
  },
  Section2: {
    flex: 0.6,
  },
  Section3: {
    flex: 0.2,
  },
  textStyle: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
}
