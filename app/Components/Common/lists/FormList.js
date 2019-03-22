import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextIn } from 'app/components/common'

export const FormList = (props) => {
  const [date, setDate] = useState('')
  return (
    <>
      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Date</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Date"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Notes</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Notes"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Duration</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Duration"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Learning Experience</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Learning Experience"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Personal Satisfaction</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Satisfaction"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Involvement</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Involvement"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

    </>
  )
}

const styles = {
  Section: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#fff',
  },
  Split1: {
    flex: 0.3,
  },
  Split2: {
    flex: 0.7,
  },
  textStyle: {
    color: '#240F48',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}
